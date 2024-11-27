# Kubernetes Replicaset

## Resources
- [Kubernetes Replicaset](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

## Features
Maintains a stable set of replica Pods.

- can handle pods created separately from the replicaset
- requires selector in spec (old replication controller didn't have this)
- doesn't re-launch new pods when replicaset is adjusted / created as long as selectors match
- replicas can be adjusted with kubectl scale command
- deleting a replicaset also deletes underlying pods matching selectors

## Practice

### Get
`kubectl get replicaset` or shorthand `kubectl get rs`

### Scale up / down
`kubectl scale --replicas=6 -f replicaset.yml`

### get replicaset image
`kubectl get rs -o jsonpath='{..image}'`

### check pods for errors when ready pods zero
`kubectl get pods -o wide`

## Common Issues

- kind `v1` (old replication controller style) instead of `apps/v1`
- selectors don't match