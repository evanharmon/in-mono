# KUBERNETES NODES

## Resources

- [Kubernetes nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)

## Features

- run pods
- contains services to run pods
- worker machines

## Node Types

- `master`
- `worker`

### Master Nodes
Manages, plans, schedules, and monitor nodes.
Storage `etcd` is a distributed key-value store that stores the state of the cluster.

Runs:
- etcd cluster
- kube-apiserver
- kube-scheduler
- kue controller manager

Other features:
- control plane
- manage worker nodes
- manage cluster state
- manage pods
- manage services
- manage network
- manage storage

### Worker Nodes
Manages containers.

Runs:
- kubelet
- kube-proxy

## Practice

### Cordon node
marks node as Unschedulable
`kubectl cordon node01`

### Drain node
`kubectl drain node01`

may need to adjust if daemonsets exist

`kubectl drain node01 --ignore-daemonsets`

if non-replicaset pod exists, you can forcefully drain the node.
Beware though - those pods will be lost! Probably better to delete the pods to get them to reschedule first
`kubectl drain node01 --force`

### Uncordon node
`kubectl uncordon node01`

### List all pods on a specific node

`kubectl get pods --all-namespaces -o wide --field-selector spec.nodeName=node1`