# KUBERNETES RESOURCE LIMITS

## Resources

- [Kubernetes resource requests and limits](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits)
- [Kubernetes limit ranges](https://kubernetes.io/docs/concepts/policy/limit-range/)

## Features

- cpu is limited by throttling
- memory limits are enforced by the kernel and result in OOMs (Out of Memory) kills
- lowest cpu is 1m

## Common scenarios

### Only requests set, no limits
no limitations on cpu / mem

### No requests set, only limits set
request and limits are set to the same thing

## Practice

## Set default limits for cpu and memory for containers

```yml
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-resource-constraint
spec:
  limits:
  - default: # this section defines default limits
      cpu: 500m
    defaultRequest: # this section defines default requests
      cpu: 500m
    max: # max and min define the limit range
      cpu: "1"
    min:
      cpu: 100m
    type: Container
```

### Get resources for a pod
`kubectl get po nginx -o jsonpath='{.spec.containers[*].resources}'

## Common mistakes

- adding or modifying LimitRange doesn't affect existing pods
- if multiple LimitRanges exist, behavior is non-deterministic
- only checks for existance of limits NOT the values