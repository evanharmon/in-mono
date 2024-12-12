# KUBERNETES UPGRADES

## Resources

- [Kubernetes api](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)
- [Kubernetes api conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md)
- [Kubernetes api changes](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api_changes.md)
- [Kubernetes kubeadm controlplane upgrades](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/)
- [Kubernetes kubeadm worker node upgrades](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/upgrading-linux-nodes/)

## Features

- recommended upgrade path is one minor version at a time
- controlplane nodes are upgraded before worker nodes

## Limitations
based on Kube-apiserver version

- controller-manager, kube-scheduler can be up to 1 minor version behind
- kubelet can be up to 2 minor versions behind
- kube-proxy can be up to 2 minor versions behind

## Worker node upgrade strategies

- all at once
- one node at a time
- only new nodes

## Practice

### Kubeadm upgrades on controlplane nodes
Remember kubeadm does NOT upgrade kubelet's
`kubeadm upgrade plan v1.31.0`

for createJob errors, run `kubeadm upgrade plan --ignore-preflight-errors=CreateJob v1.31.0`
kubeadm 1.30 has a regression / bug.

upgrade kubeadm to new k8s version:
```sh
sudo apt update
sudo apt-cache madison kubeadm

# replace x in 1.31.x-* with the latest patch version
sudo apt-mark unhold kubeadm && \
sudo apt-get update && sudo apt-get install -y kubeadm='1.31.x-*' && \
sudo apt-mark hold kubeadm
```

upgrade kubernetes on node:
`kubeadm upgrade apply v1.31.0`

for createJob errors, run `kubeadm upgrade apply --ignore-preflight-errors=CreateJob v1.31.0`
kubeadm 1.30 has a regression / bug.

note `kubectl get nodes` will still show old version of k8s, until kubelet's are upgraded
not always relevant though since not all controlplane nodes have kubelet installed

Remember to do upgrades for other plugins afterwards

drain the node for maintenance:
`kubectl drain <node-to-drain> --ignore-daemonsets`

upgrade kubelet to new k8s version:

```sh
# replace x in 1.31.x-* with the latest patch version
sudo apt-mark unhold kubelet kubectl && \
sudo apt-get update && sudo apt-get install -y kubelet='1.31.x-*' kubectl='1.31.x-*' && \
sudo apt-mark hold kubelet kubectl

# verify
kubelet version
kubectl version
```

restart kubelet:

```sh
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```

uncordon the node: `kubectl uncordon node01`

verify status of nodes:
`kubectl get nodes`

### Kubeadm upgrades on worker nodes
ssh in to node:
`ssh node01` or get the ip from `kubectl get pods -o wide` and `ssh <Ip>`

upgrade kubeadm to new k8s version:
```sh
# replace x in 1.31.x-* with the latest patch version
sudo apt-mark unhold kubeadm && \
sudo apt-get update && sudo apt-get install -y kubeadm='1.31.x-*' && \
sudo apt-mark hold kubeadm

kubeadm version # verify
```

upgrade worker node:
`sudo kubeadm upgrade node`

drain the node: `kubectl drain node1`

upgrade kubelet to new k8s version:

```sh
# replace x in 1.31.x-* with the latest patch version
sudo apt-mark unhold kubelet kubectl && \
sudo apt-get update && sudo apt-get install -y kubelet='1.31.x-*' kubectl='1.31.x-*' && \
sudo apt-mark hold kubelet kubectl

# verify
kubelet version
kubectl version
```

```sh
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```

uncordon the node: `kubectl uncordon node01`

## Common issues

### Can't see newer kubeadm versions

edit `vim /etc/apt/sources.list.d/kubernetes.list` and change to v1.X