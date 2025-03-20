# KUBERNETES SECURITY KUBE BENCH

## Resources
- [Github kube-bench](https://github.com/aquasecurity/kube-bench)

## Features
open source tool to check kubernetes against CIS benchmarks

## Limitations
- attempts to check CIS kube benchmarks but not 100% coverage / accurate
- CIS benchmarks only cover specific releases of kubernetes / features

## Deployment methods
- container
- pod
- job
- binaries on node

### Job
```bash
$ kubectl apply -f job.yaml
job.batch/kube-bench created

$ kubectl get pods
NAME                      READY   STATUS              RESTARTS   AGE
kube-bench-j76s9   0/1     ContainerCreating   0          3s

# Wait for a few seconds for the job to complete
$ kubectl get pods
NAME                      READY   STATUS      RESTARTS   AGE
kube-bench-j76s9   0/1     Completed   0          11s

# The results are held in the pod's logs
kubectl logs kube-bench-j76s9
[INFO] 1 Master Node Security Configuration
[INFO] 1.1 API Server
...
```

## Install
```bash
# download binary from GH releases
# https://github.com/aquasecurity/kube-bench/releases
wget https://github.com/aquasecurity/kube-bench/releases/download/v0.10.4/kube-bench_0.10.4_linux_amd64.tar.gz
# unpack the tarball with binary and config dir
tar -zxf kube-bench_0.10.4_linux_amd_64.tar.gz
```

## Run
```bash
 ./kube-bench --config-dir `pwd`/cfg --config `pwd`/cfg/config.yaml
 ```