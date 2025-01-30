# KUBERNETES NETWORK POLICIES

## Resources

- [Kubernetes network policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

## Features
by default, all pods can access all other pods in the cluster

- `Allow all`
- requires a network plugin
- allowed ingress automatically allows same egress
- only affects layer4 connections

## Limitations

below is not supported yet:
- node specific policies
- targeting services by name
- default policies applied to all namespaces or pods

## Plugins supporting network policies
NOTE: flannel is not supported, cilium has it's own crd / policies
- kube-router
- calico
- romana
- weave-net

## Practice

### Default deny all ingress for a namespace

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

### Allow all ingress

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-ingress
spec:
  podSelector: {}
  ingress:
  - {}
  policyTypes:
  - Ingress
```

### Allow all egress

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-egress
spec:
  podSelector: {}
  egress:
  - {}
  policyTypes:
  - Egress
```

### Deny all ingress / egress
example policy where both policy types are used

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

### Example ingress policy

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: dev-db-network-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
    - Ingress
    - Egress
  egress:
    - to:
        # Allow egress to db backup server
        - ipBlock:
            cidr: 192.68.5.22/32 # for an IP outside cluster
      ports:
        - protocol: TCP
          port: 80
  ingress:
    - from:
        # both pod and namespace must match
        - podSelector:
            matchLabels:
              name: api-pod
          namespaceSelector:
            matchLabels:
              name: dev # label must exist on namespace
        - ipBlock:
            cidr: 192.68.5.22/32 # for an IP outside cluster
      ports:
        - protocol: TCP
          port: 5432
```

### Egress across multiple namespaces

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: egress-namespaces
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Egress
  egress:
  - to:
    - namespaceSelector:
        matchExpressions:
        - key: namespace
          operator: In
          values: ["frontend", "backend"]
```

### Limit Egress to specific cidr block and port range

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: multi-port-egress
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
    - Egress
  egress:
    - to:
        - ipBlock:
            cidr: 10.0.0.0/24
      ports:
        - protocol: TCP
          port: 32000
          endPort: 32768
```

### Allow egress to multiple namespaces

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: egress-namespaces
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Egress
  egress:
  - to:
    - namespaceSelector:
        matchExpressions:
        - key: namespace
          operator: In
          values: ["frontend", "backend"]
```

### Get network policies
`kubectl get networkpolicies` or `kubectl get netpol`

### Match on namespace AND pod selector for ingress
watch the indentation! `podSelector` needs same indentation but not be a list
```yaml
ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          user: alice
      podSelector:
        matchLabels:
          role: client
```

### Math on namespace OR pod selector for ingress

```yaml
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          user: alice
    - podSelector:
        matchLabels:
          role: client
```