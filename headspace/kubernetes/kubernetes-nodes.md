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