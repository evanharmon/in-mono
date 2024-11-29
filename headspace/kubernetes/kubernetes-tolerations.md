# KUBERNETES TOLERATIONS

## Resources
- [Kubernetes Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

## Features

- allows scheduler to schedule pods matching taints

## Settings
NoSchedule, PreferNoSchedule, and NoExecute

NoSchedule: pods won't be scheduled, existing pods will NOT be evicted
PreferNoSchedule: best efforts to not schedule pods
NoExecute: pods won't be scheduled and existing pods will get evicted

## Practice

### Example pod yml toleration
```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  tolerations:
  - key: "example-key"
    operator: "Exists"
    effect: "NoSchedule"

```

## Common mistakes

- tolerations DO NOT guarantee scheduling