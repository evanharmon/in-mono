# KUBERNETES TROUBLESHOOT NODES

## Resources

- [Kubernetes troubleshooting monitor node health](https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/)

## Features
- debug node pod mounts root filesystem at `/host`

## Debug node with kubectl debug
`kubectl debug node/mynode -it --image=ubuntu`
good for checking `ip, ifconfig, nc, ping, ps`
`mtr, tcpdump, curl` have to be installed via package manager

can look in:
```bash
tail /host/var/log/kubelet.log
tail /host/var/log/kube-proxy.log
tail /host/var/log/containerd.log
tail /host/var/log/syslog
tail /host/var/log/kern.log
```

clean up:
```sh
kubectl get pods
# example
kubectl delete pod node-debugger-mynode-pdx84 --now
```

## Node Problem Detector
deploy via kubectl / yaml
`kubectl apply -f https://k8s.io/examples/debug/node-problem-detector.yaml`
or as addon by placing inside:
`/etc/kubernetes/addons/node-problem-detector/node-problem-detector.yaml`
configmap can be used to overwrite default config

```yml
...
spec:
  containers:
    - name: node-problem-detector
      volumeMounts:
        - name: config
          mountPath: /config
          readOnly: true
  volumes:
    - name: config
      configMap:
        name: node-problem-detector-config
```

## Debug worker nodes
1. `kubectl describe node worker-1`
check status:
- OutOfDisk
- MemoryPressure
- DiskPressure
- PIDPressure
- Ready

should be `false` but may be `Unknown` if node stopped posting status
look at the `LastHeartbeatTime` to see when status was last sent

2. SSH / connect to the node
`ssh node01`, etc.

3. Check overall node
`top`

4. Check node disk space
`dh -h`

5. Check kubelet
`service kubelet status`
`sudo journalctl -u kubelet`

look in `/etc/kubernetes/kubelet.conf`
and `/var/lib/kubelet/config.yaml`

6. Check kubelet certs
`openssl x509 -in /var/lib/kubelet/worker-1.crt -text -noout`

Check that:
- `Issuer: KUBERNETES-CA`
- Not After validity isn't expired
- subject has nodes group `Subject: CN = system:node:worker-1, O = system:nodes`
