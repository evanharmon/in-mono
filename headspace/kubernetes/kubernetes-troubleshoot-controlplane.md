# KUBERNETES TROUBLESHOOT CONTROLPLANE

## Resources
- [Kubernetes troubleshooting clusters](https://kubernetes.io/docs/tasks/debug/debug-cluster/)

## Debug controlplane
1. check nodes
`kubectl get nodes`
2. check pods
`kubectl get pods`
3. check controlplane pods
`kubectl get pods -n kube-system`
4. check controlplane services
`service kube-apiserver status`
`service kube-controller-manager status`
`service kube-scheduler status`
5. check worker node services
`service kubelet status`
`service kube-proxy status`
6. check controlplane component logs
if deployed as pods via kubeadm:
`kubectl logs kube-apiserver-master -n kube-system`
or
`journalctl -u kube-apiserver`