# KUBERNETES CLUSTER NETWORKING

## Resources

- [Kubenetes cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/)
- [Kubernetes ports and protocols](https://kubernetes.io/docs/reference/networking/ports-and-protocols/)
- [Kubernetes implementing networking model](https://kubernetes.io/docs/concepts/cluster-administration/networking/#how-to-implement-the-kubernetes-networking-model)

## Node requirements
must have:
* at least one networking interface
* unique FQDN
* ip address configured
* unique MAC address

## Master node requirements
* port 6443 open for kube-apiserver
* port 10250 open if kubelet is running on master node
* port 10259 open for kube-scheduler
* port 10257 open for kube-controller-manager
* port 2379 open for etcd
* port 2380 open if etcd HA for the clients

## Worker node requirements
* port 10250 open for kubelet
* ports 30000 - 32767 for nodePort services
* port 10256 for kube-proxy