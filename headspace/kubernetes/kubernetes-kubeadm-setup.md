# KUBERNETES KUBEADM SETUP

## Steps

1. provision master / worker nodes
2. install container runtime on nodes
3. install kubeadm on nodes
4. initialize master node with required components
5. create pod network and ensure all network prereqs are met!
6. join worker nodes

## Commands

### initialize master node
```sh
kubeadm init \
  --apiserver-advertise-address=192.168.56.11 \
  --pod-network-cidr 10.244.0.0/16 \
  --upload-certs
```

### install a CNI for pod networking
example flannel:
`kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml`