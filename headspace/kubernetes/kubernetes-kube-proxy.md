
# KUBERNETES KUBE-PROXY

## Resources

- [Kubernetes kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/)

## Features
Network proxy service running on each node. Pod networking solution.
Virtual network across all nodes.

- can do this using iptables rules
- can be used locally to directly curl kube-apiserver without specifying certs

## Deployment

Can always check options with `ps -aux | grep kube-proxy`

### Kubeadm
Deploys kube-proxy for you and it's visible as a pod on the master node

`kubectl get pods -n kube-system'

it's actually a daemonset

`kubectl get daemonset -n kube-system`

Settings are viewable at:
`cat /etc/kubernetes/manifests/kube-proxy.yml`

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-proxy.service`
