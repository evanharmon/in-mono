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
- sets dns nameserver on pods

## Deployment

Can always check options with `ps -aux | grep kube-apiserver`

### Kubeadm
Does NOT deploy kubelets. Must always manually install and run service.

### Manual

Settings are viewable at:
`cat /etc/systemd/system/kube-apiserver.service`

## Example KubeletConfiguration with certs

```yml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
authentication:
  x509:
    clientCAFile: "/var/lib/kubernetes/ca.pem"
authorization:
  mode: Webhook
clusterDomain: "cluster.local"
clusterDNS:
  - "10.32.0.10"
podCIDR: "$(POD_CIDR)"
resolvConf: "/run/systemd/resolve/resolv.conf"
runtimeRequestTimeout: "15m"
tlsCertFile: "/var/lib/kubelet/kubelet-node01.crt"
tlsPrivateKeyFile: "/var/lib/kubelet/kubelet-node01.key"
```

## Practice

### Install kubelet
`apt-get install -y kubelet=1.31.0-00`

### Upgrade kubelet
`apt-get upgrade -y kubelet=1.31.0-00`
`systemctl restart kubelet`
