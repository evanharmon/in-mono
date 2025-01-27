# KUBERNETES ADMISSION CONTROLLERS

## Resources
- [Kubernetes admission control](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/)

## Features
goes beyond the limitations of typical RBAC to enforce additional checks

## Types

- `validating`: does not mutate
- `mutating`: makes changes

## Order of processing
1. Mutating
2. Validating

Example: `NamespaceAutoProvision`
`Mutating` has to run first and create namespace.
Otherwise `validating` would prevent this capability

## Default admission controllers
- `AlwaysPullImages` - enforces always pulling images
- `DefaultStorageClass` - auto add default storage class to PVC's 
- `EventRateLimit` - help keep the api server from being flooeded with requests
- `NamespaceExists` - DEPRECATED: enabled by default
..many more

## Deprecated
- `NamespaceExists` - DEPRECATED: use `NamespaceLifecycle`

## Example validating webhooks
- every pod has a nodeSelector label key
- only allow images from specific registries
- disallow `runAsRoot` on pods
- set `runAsNonRoot` to true and set a `runAsUser` to a value for pod
- allow to run as root if explicitly set: `runAsNonRoot: false`
- disallow mismatch of `runAsNonRoot: true` and `runAsUser: 0`
- enforce requests / limits are set
- enforce specific label keys

## See enabled admission controllers
```bash
# non-kubeadn setup
kube-apiserver -h | grep 'enable-admission-plugs'
# kubeadm setup
kubectl exec kube-apiserver-controlplane -n kube-system \
  -- kube-apiserver -h | grep 'enable-admission-plugs'
```

## Check admission controller plugins
`ps -ef | grep 'kube-apiserver' | grep 'admission-plugins`

## Enable admission controllers
list won't include the defaults

update `kube-apiserver.service` or `/etc/kubernetes/manifests/kube-apiserver.yaml`
`--enable-admission-plugins=<plugins list here>`

## Disable admission controllers
this is how you disable defaults as well

update `kube-apiserver.service` or `/etc/kubernetes/manifests/kube-apiserver.yaml`
`--disable-admission-plugins=<plugins list here>`