# KUBERNETES STATIC PODS

## Resources
- [Kubernetes create static pods](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)

## Feature
Requires kubelet service which watches a folder and creates static pods

- folder is configuration via `--pod-manifest-path=` flag on kubelet service
- or set inside a `kubeconfig.yaml` in the `staticPodPath` field. Pass in via `--config` flag on kubelet service
- static and regular pods can exist at same time. Kubelet supports folder AND api calls
- kubelet will restart crashed static pods
- kube-scheduler has no effect on static pods
- static pods have the nodeName appended at end of name

## Limitations

- static pods viewable thru kube-api-server are read-only and can't be interacted with

## Practice

### Create static pod
Create a pod yml file and place in `/etc/kubernetes/manifests` folder

```yml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: nginx
      images: nginx
```

## Common issues

- if flag not set on kubelet service, look in config file for kubelet

### Can't see pods
If the kube-api-server doesn't exist yet, `kubectl` won't work. Use `docker ps`, `crictl ps`, or `nerdctl ps`


### How to tell if a pod is a static pod?
Check the OwnerReferences section of the pod spec with `kubectl get po mypod -o yaml`.
Look for `kind: Node`. Non-static pods will have `ReplicaSet`, etc.

### How to tell if a staticPodPath reference is set?
look in `/var/lib/kubelet/config.yml` and look for staticPodPath reference path.