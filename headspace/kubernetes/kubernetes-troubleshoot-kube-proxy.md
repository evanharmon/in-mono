# KUBERNETES TROUBLESHOOT KUBE-PROXY

## Resources
- [Kubernetes debug service issues](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/)
- [DNS Troubleshooting](https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/)

## Check kube-proxy
1. Ensure kube-proxy pod is running
`kubectl get pod kube-proxy -n kube-system`
2. Check logs
`kubectl logs -n kube-system kube-proxy`
3. Check configmap
ensure config file is correct / exists
```bash
kubectl get cm -n kube-system
# replace with actual name
kubectl get cm -n kube-system <kube-proxy-cm-name>
```

ensure `kube-config` is defined in configmap

4. Check kube-proxy is running inside the container

```bash
netstat -plan | grep kube-proxy tcp 0 0 0.0.0.0:30081 0.0.0.0:* LISTEN 1/kube-proxy tcp 0 0 127.0.0.1:10249 0.0.0.0:* LISTEN 1/kube-proxy tcp 0 0 172.17.0.12:33706 172.17.0.12:6443 ESTABLISHED 1/kube-proxy tcp6 0 0 :::10256 :::* LISTEN 1/kube-proxy
```

## Check config file
1. get config file location
`kubectl describe ds kube-proxy -n kube-system`

example command:

```conf
/usr/local/bin/kube-proxy
--config=/var/lib/kube-proxy/config.conf
--hostname-override=$(NODE\_NAME)
```

check `clusterCIDR, kubeproxy mode, ipvs, iptables, bindaddress, kube-config, etc`