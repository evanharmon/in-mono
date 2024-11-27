# KUBERNETES ETCD

## Resources
- [Kubernetes Etcd](https://kubernetes.io/docs/concepts/architecture/#etcd)
- [Kubernetes managing backups for Etcd](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster)

## Features
ETCD is used as a datastore for the cluster.

- nodes
- PODs
- configs
- secrets
- accounts
- roles
- bindings
- etc..

## Deployment

kubeadm manages etcd for you, otherwise you have to setup / install manual.

## Service

should specify `--advertise-client-urls https://${INTERNAL_IP}:2379`


### Specify certs

```sh
...
--cacert /etc/kubernetes/pki/etcd/ca.crt
--cert /etc/kubernetes/pki/etcd/server.crt
--key /etc/kubernetes/pki/etcd/server.key
```
### Get all keys 
certs are required

```bash
$ kubectl exec etcd-controlplane -n kube-system -- sh -c "ETCDCTL_API=3 etcdctl get / --prefix --keys-only --limit=10 --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key"

# example output / directory structure
/registry/apiregistration.k8s.io/apiservices/v1.apps
```