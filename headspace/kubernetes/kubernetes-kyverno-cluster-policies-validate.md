# KUBERNETES KYVERNO CLUSTER POLICIES VALIDATE RULES

## Examples

### Ensure label exists
enforces `app` label for deployments, statefulsets, and daemonsets
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: check-label-app
spec:
  rules:
    - name: check-label-app
      match:
        any:
        - resources:
            kinds:
            - Deployment
            - StatefulSet
            - DaemonSet
      validate:
        failureAction: Enforce
        message: "The label `app` is required."
        pattern:
          spec:
            template:
              metadata:
                labels:
                  app: "?*"
```

or even better - from best practices, just for PODS though
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
  annotations:
    policies.kyverno.io/title: Require Labels
    policies.kyverno.io/category: Best Practices
    policies.kyverno.io/minversion: 1.6.0
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod, Label
    policies.kyverno.io/description: >-
      Define and use labels that identify semantic attributes of your application or Deployment.
      A common set of labels allows tools to work collaboratively, describing objects in a common manner that
      all tools can understand. The recommended labels describe applications in a way that can be
      queried. This policy validates that the label `app.kubernetes.io/name` is specified with some value.
spec:
  validationFailureAction: Audit
  background: true
  rules:
  - name: check-for-labels
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "The label `app.kubernetes.io/name` is required."
      pattern:
        metadata:
          labels:
            app.kubernetes.io/name: "?*"
```

### Enforce specific labels
kubecost example
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-kubecost-labels
  annotations:
    policies.kyverno.io/title: Require Kubecost Labels
    policies.kyverno.io/category: Kubecost
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod, Label
    kyverno.io/kyverno-version: 1.10.0
    kyverno.io/kubernetes-version: "1.25"
    policies.kyverno.io/description: >-
      Kubecost can use labels assigned to Pods in order to track and display
      cost allocation in a granular way. These labels, which can be customized, can be used
      to organize and group workloads in different ways. This policy requires that the labels
      `owner`, `team`, `department`, `app`, and `env` are all defined on Pods. With Kyverno
      autogen enabled (absence of the annotation `pod-policies.kyverno.io/autogen-controllers=none`),
      these labels will also be required for all Pod controllers.
spec:
  validationFailureAction: Audit
  background: true
  rules:
  - name: require-labels
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "The Kubecost labels `owner`, `team`, `department`, `app`, and `env` are all required for Pods."
      pattern:
        metadata:
          labels:
            owner: "?*"
            team: "?*"
            department: "?*"
            app: "?*"
            env: "?*"

```

### Enforce specific label and value range
untested but an example with pre-conditions
requiring a label key with specific values

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-department-label
spec:
  rules:
  - name: "validate-dept-label"
    match:
      resources:
        kinds:
        - Pod
        - Deployment
        - Statefulset
   validate:
      message: "All pods, deployments, and statefulsets must have a dept label with a valid value. (finance, r&d, hr, marketing, sales)"
      pattern:
       metadata:
         labels:
           department: "?*"
      preconditions:
        all:
        - key: "{{ request.object.metadata.labels.dept }}"
          operator: In
          value: ["finance", "r&d", "hr", "marketing", "sales"]
```

### Ensure namespace has purpose label
policy would be `env` type: dev, staging, prod, etc
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-ns-purpose-label
spec:
  rules:
  - name: require-ns-purpose-label
    match:
      any:
      - resources:
          kinds:
          - Namespace
    # The `validate` statement tries to positively check what is defined. If the statement, when compared with the requested resource, is true, it is allowed. If false, it is blocked.
    validate:
      # The `failureAction` tells Kyverno if the resource being validated should be allowed but reported (`Audit`) or blocked (`Enforce`).
      failureAction: Enforce
      message: "You must have label `purpose` with value `production` set on all new namespaces."
      pattern:
        metadata:
          labels:
            purpose: production
```

### Require resource requests and limits
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-requests-limits
  annotations:
    policies.kyverno.io/title: Require Limits and Requests
    policies.kyverno.io/category: Best Practices, EKS Best Practices
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/minversion: 1.6.0
    policies.kyverno.io/description: >-
      As application workloads share cluster resources, it is important to limit resources
      requested and consumed by each Pod. It is recommended to require resource requests and
      limits per Pod, especially for memory and CPU. If a Namespace level request or limit is specified,
      defaults will automatically be applied to each Pod based on the LimitRange configuration.
      This policy validates that all containers have something specified for memory and CPU
      requests and memory limits.
spec:
  validationFailureAction: Audit
  background: true
  rules:
  - name: validate-resources
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "CPU and memory resource requests and memory limits are required for containers."
      pattern:
        spec:
          containers:
          - resources:
              requests:
                memory: "?*"
                cpu: "?*"
              limits:
                memory: "?*"
          =(initContainers):
          - resources:
              requests:
                memory: "?*"
                cpu: "?*"
              limits:
                memory: "?*"
          =(ephemeralContainers):
          - resources:
              requests:
                memory: "?*"
                cpu: "?*"
              limits:
                memory: "?*"

```

### Ensure replica count above 1
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: validate
spec:
  rules:
    - name: validate-replica-count
      match:
        any:
        - resources:
            kinds:
            - Deployment
      validate:
        failureAction: Enforce
        message: "Replica count for a Deployment must be greater than or equal to 2."
        pattern:
          spec:
            replicas: ">=2"
```

### Disallow default namespace
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-default-namespace
  annotations:
    pod-policies.kyverno.io/autogen-controllers: none
    policies.kyverno.io/title: Disallow Default Namespace
    policies.kyverno.io/minversion: 1.6.0
    policies.kyverno.io/category: Multi-Tenancy
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/description: >-
      Kubernetes Namespaces are an optional feature that provide a way to segment and
      isolate cluster resources across multiple applications and users. As a best
      practice, workloads should be isolated with Namespaces. Namespaces should be required
      and the default (empty) Namespace should not be used. This policy validates that Pods
      specify a Namespace name other than `default`. Rule auto-generation is disabled here
      due to Pod controllers need to specify the `namespace` field under the top-level `metadata`
      object and not at the Pod template level.
spec:
  validationFailureAction: Enforce # Evan's edit away from `Audit` - untested 
  background: true
  rules:
  - name: validate-namespace
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "Using 'default' namespace is not allowed."
      pattern:
        metadata:
          namespace: "!default"
  - name: validate-podcontroller-namespace
    match:
      any:
      - resources:
          kinds:
          - DaemonSet
          - Deployment
          - Job
          - StatefulSet
    validate:
      message: "Using 'default' namespace is not allowed for pod controllers."
      pattern:
        metadata:
          namespace: "!default"
```
