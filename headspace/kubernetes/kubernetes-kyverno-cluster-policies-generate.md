# KUBERNETES KYVERNO CLUSTER POLICIES GENERATE RULES

## Features
this is interesting as now Kyverno will be creating resources.
So the resources will not be in infrastructure as code / visible in codebase.

- supports new resources and / or updating existing resources

## Examples

### Add default deny all traffic on namespace creation
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: default
spec:
  rules:
  - name: deny-all-traffic
    match:
      any:
      - resources:
          kinds:
          - Namespace
    exclude:
      any:
      - resources:
          namespaces:
          - kube-system
          - default
          - kube-public
          - kyverno
    generate:
      kind: NetworkPolicy
      apiVersion: networking.k8s.io/v1
      name: deny-all-traffic
      namespace: "{{request.object.metadata.name}}"
      data:
        spec:
          # select all pods in the namespace
          podSelector: {}
          policyTypes:
          - Ingress
          - Egress
```

### Create default PodDisruptionBudget
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: create-default-pdb
spec:
  rules:
  - name: create-default-pdb
    match:
      any:
      - resources:
          kinds:
          - Deployment
    exclude:
      resources:
        namespaces:
        - local-path-storage
    generate:
      generateExisting: true
      apiVersion: policy/v1
      kind: PodDisruptionBudget
      name: "{{request.object.metadata.name}}-default-pdb"
      namespace: "{{request.object.metadata.namespace}}"
      synchronize: true
      data:
        spec:
          minAvailable: 1
          selector:
            matchLabels:
              "{{request.object.metadata.labels}}"
```