# KUBERNETES RESOURCE QUOTAS

## Resources

- [Kubernetes resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/)

## Features
limit the total cpu and memory requests / limits
provides constraints that limit aggregate resource consumption per namespace
- can set a quota count for max # of a resource kind
- requires a namespace!

## Examples
often used by explicitly passing `-n myns` on creation
this way the yaml can be-reused to set limits / counts multiple times

### Set default limits for cpu and memory for containers

```yml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-resource-quota
spec:
  hard:
    requests.cpu: 4
    requests.memory: 4Gi
    limits.cpu: 10
    requests.memory: 10Gi
```

### Set count limits of specific resources
```yaml
cat <<EOF > object-counts.yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: object-counts
spec:
  hard:
    configmaps: "10"
    persistentvolumeclaims: "4"
    pods: "4"
    replicationcontrollers: "20"
    secrets: "10"
    services: "10"
    services.loadbalancers: "2"
EOF
```

## Common mistakes

- adding or modifying LimitRange doesn't affect existing pods
- if multiple LimitRanges exist, behavior is non-deterministic
- only checks for existance of limits NOT the values