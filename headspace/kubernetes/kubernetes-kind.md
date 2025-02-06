# KUBERNETES KIND

## Resources

- [Kubernetes kind doc](https://kind.sigs.k8s.io/)
- [Kubernetes kind github](https://github.com/kubernetes-sigs/kind)

## Limitations
- `kubectl`, `kubeadm` are NOT installed via `apt`
- `vim` is not installed by default

## Features
run kubernetes in docker
- useful for testing, working locally, etc.
- supports multi-node and HA clusters
- default networking is a simple solution named `kindnetd` 
- limited support for CNI's but some work like `calico`, `cilium`, etc.
- uses `kubeadm` to configure cluster nodes
- supports customizing `kubeadm` InitConfiguration, ClusterConfiguration, JoinConfiguration

## Best practices
Kind isn't setup for security - keep the apiserver to localhost / loopback.
Don't expose publicly

## Access nodes
The nodes are docker containers

```bash
# get container names of nodes
docker ps
# exec in to a container node
docker exec -it basic-cluster-control-plane /bin/bash
```