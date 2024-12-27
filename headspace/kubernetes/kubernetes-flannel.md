# KUBERNETES FLANNEL CNI

## Resources
- [Kubernetes flannel cni github](https://github.com/flannel-io/flannel)

## Install
with kubectl:
`kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml`

with helm:
```sh
# Needs manual creation of namespace
kubectl create ns kube-flannel
kubectl label --overwrite ns kube-flannel pod-security.kubernetes.io/enforce=privileged

helm repo add flannel https://flannel-io.github.io/flannel/
helm install flannel --set podCidr="10.244.0.0/16" --namespace kube-flannel flannel/flannel
```