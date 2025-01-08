# KUBERNETES TROUBLESHOOT COREDNS

## Common Scenarios

### CoreDNS pods in a pending state
- make sure network plugin is installed

### CoreDNS pods are in CrashLopBackOff or Error'ing
if pod is detecting a loop,

1. Adjust kubelet config yaml
add to the kubelet config yaml
```yaml
# tells kubelet to pass alternate resolve.conf
_resolveConf: _
```

2. Disable local DNS cache and restore /etc/resolv.conf to original

3. Edit Corefile
replace `./etc/resolv.conf` with upstream DNS (like 8.8.8.8)
note: kubelet will still forward to resolv.conf to all default dnsPolicy Pods
so they'll be unable to resolve DNS...

### CoreDNS pods and kube-dns are working
check for valid endpoints
`kubectl -n kube-system get ep kube-dns`
if none exist, check the service for correct selectors / ports