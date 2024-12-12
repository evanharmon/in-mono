# KUBERNETES KUBEADM

## Resources
- [Kubernetes kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/)


## Limitations

- upgrades should happen sequentially

## Practice

### Install kubeadm to specific kubernetes version

`apt-get install -y kubeadm=1.31.0-00`

### Upgrade kubeadm to specific kubernetes version

`apt-get upgrade -y kubeadm=1.31.0-00`

### Upgrade kubernetes version
Remember kubeadm does NOT upgrade kubelet's
`kubeadm upgrade plan`, `kubeadm upgrade apply`

### Create join token and print command

`kubeadm create token --print-join-command`
