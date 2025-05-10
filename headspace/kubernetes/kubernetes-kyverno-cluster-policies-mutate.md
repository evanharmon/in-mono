# KUBERNETES KYVERNO CLUSTER POLICIES MUTATE RULES

## Examples

### Use image pull policy for latest tag
ensures pods set `imagePullPolicy: "IfNotPresent"` for `latest` tag
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: set-image-pull-policy
spec:
  rules:
    - name: set-image-pull-policy
      match:
        any:
        - resources:
            kinds:
            - Pod
      mutate:
        patchStrategicMerge:
          spec:
            containers:
              # match images which end with :latest
              - (image): "*:latest"
                # set the imagePullPolicy to "IfNotPresent"
                imagePullPolicy: "IfNotPresent"
```

### Add default security context
pretty sure this breaks SOME images like `nginx`.
so additional config / setup in container will be required
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-default-securitycontext
spec:
  rules:
  - name: add-default-securitycontext
    match:
      any:
      - resources:
          kinds:
          - Pod
    mutate:
      patchStrategicMerge:
        spec:
          securityContext:
            +(runAsNonRoot): true
            +(runAsUser): 1000
            +(runAsGroup): 3000
            +(fsGroup): 2000
```

### Add default resources
```yaml
apiVersion : kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-default-resources
  annotations:
    policies.kyverno.io/title: Add Default Resources
    policies.kyverno.io/category: Other
    policies.kyverno.io/severity: medium
    kyverno.io/kyverno-version: 1.10.0-alpha.2
    policies.kyverno.io/minversion: 1.7.0
    kyverno.io/kubernetes-version: "1.26"
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/description: >-
      Pods which don't specify at least resource requests are assigned a QoS class
      of BestEffort which can hog resources for other Pods on Nodes. At a minimum,
      all Pods should specify resource requests in order to be labeled as the QoS
      class Burstable. This sample mutates any container in a Pod which doesn't
      specify memory or cpu requests to apply some sane defaults.
spec:
  background: false
  rules:
  - name: add-default-requests
    match:
      any:
      - resources:
          kinds:
          - Pod
    preconditions:
      any:
      - key: "{{request.operation || 'BACKGROUND'}}"
        operator: AnyIn
        value:
        - CREATE
        - UPDATE
    mutate:
      foreach:
      - list: "request.object.spec.[ephemeralContainers, initContainers, containers][]"
        patchStrategicMerge:
          spec:
            containers:
            - (name): "{{element.name}}"
              resources:
                requests:
                  +(memory): "100Mi"
                  +(cpu): "100m"
```

### Add default label automatically

```yaml
apiVersion : kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-default-env-label
  annotations:
    policies.kyverno.io/title: Add Default Env
    policies.kyverno.io/category: Other
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/description: >-
      Add a default environment label to every pod.
spec:
  background: false
  rules:
   - name: add-env-prod-label
     match:
       resources:
        kinds:
        - Pod
        # or to specific namespace as another option
        namespaces:
        - prod
    mutate:
      patchStrategicMerge:
        metadata:
          labels:
            environment: "prod"
```
