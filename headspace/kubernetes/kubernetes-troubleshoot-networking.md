# KUBERNETES TROUBLESHOOT NETWORKING

## CNI

### Check if CNI is installed and running
1. Check cni plugin confs
`ls /etc/cni/net.d`

2. Check CNI plugin binaries
`ls /opt/cni/bin`

3. Check if CNI daemonset running
`kubectl get ds -A`
if missing, install the specific CNI with `kubectl apply`