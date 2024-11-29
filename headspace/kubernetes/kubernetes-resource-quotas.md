# KUBERNETES RESOURCE QUOTAS

## Resources

- [Kubernetes resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/)

## Features
limit the total cpu and memory requests / limits

## Practice

## Set default limits for cpu and memory for containers

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

## Common mistakes

- adding or modifying LimitRange doesn't affect existing pods
- if multiple LimitRanges exist, behavior is non-deterministic
- only checks for existance of limits NOT the values