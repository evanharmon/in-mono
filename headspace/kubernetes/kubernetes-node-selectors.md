# KUBERNETES NODE SELECTORS

## Resources

- [Kubernetes Node Selectors](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector)

## Features
Simple way to select a node in a pod spec

## Practice

### Set a nodeSelector on a pod spec

```yml
apiVersion: 
kind: Pod
spec:
  containers:
    - name: nginx
      image: nginx
  nodeSelector:
    size: Medium
```
