# KUBERNETES KUBELET

## Resources

- [Kubernetes kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)

## Features
Agent that runs on each node in a cluster and listens to kube-apiserver.
kube-scheduler info passed back to kube-apiserver is stored in ETC, then passed to kubelet by kube-apiserver.

- registers / de-registers nodes
- pulls images
- creates pods
- monitors Node & Pods

## Deployment

Can always check options with `ps -aux | grep kube-apiserver`

### Kubeadm
Does NOT deploy kubelets. Must always manually install and run service.

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-apiserver.service`