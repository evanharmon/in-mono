# Kubernetes Controller Manager

## Resources

- [Kubernetes Controller Manager](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/)

## Features
Daemon that embeds the core control loops shipped with kubernetes. Manages the default controllers.

- node-controller
- replication-controller
- deployment-controller
- namespace-controller
- service-account-controller
- job-controller
- stateful-set
- pv-binder-controller
- endpoint-controller
- pv-protection-controller
- replicaset
- etc..

## Controller Sets
enabled controllers can be limited with `--controllers` flag

## Deployment

Can always check options with `ps -aux | grep kube-controller-manager`

### Kubeadm
Deploys kube-controller-manager for you and it's visible as a pod on the master node

`kubectl get pods -n kube-system'

Settings are viewable at:
`cat /etc/kubernetes/manifests/kube-controller-manager.yml`

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-controller-manager.service`

## Practice

### Flags for certificate controllers

```sh
--cluster-signing-cert-file='/etc/kubernetes/pki/ca.crt' \
--cluster-signing-key-file='/etc/kubernetes/pki/ca.key' \
```