
# KUBERNETES KUBE-PROXY

## Resources

- [Kubernetes kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/)

## Features
provides network connectivity for kubernetes services.

- network proxy service running on each node
- pod networking solution
- virtual network across all nodes
- traffic forwarding
- responsible for sending traffic to actual pods
- watches services and endpoints associated
- load balancing
- supports service discovery
- can be used locally to directly curl kube-apiserver without specifying certs
- runs as daemonset

## Modes
- iptables (IP over Pod) is default mode
- IPVS mode for advanced load balancing
- userspace mode is legacy and rarely used

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

### View ip rules created

`iptables -L -t nat | grep <service_name>`