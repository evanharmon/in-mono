# KUBERNETES KUBE-APISERVER

## Resources

- [Kubernetes kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/)

## Features
Primary control server for kubernetes. Only component that communicates with ETCD.

- API server for Kubernetes
- Manages the state of the cluster
- Manages the configuration of the cluster
- Manages the scheduling of the cluster

## Deployment

Can always check options with `ps -aux | grep kube-apiserver`

### Kubeadm
Deploys kube-apiserver for you and it's visible as a pod on the master node

`kubectl get pods -n kube-system'

Settings are viewable at:
`cat /etc/kubernetes/manifests/kube-apiserver.yml`

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-apiserver.service`