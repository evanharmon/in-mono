# KUBERNETES BACKUP AND RESTORE

## Resources

- [Kubernetes backup etcd cluster](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster)
- [Kubernetes restore and etcd cluster](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster)

## Features

- candidates for backup: resource configs, etcd cluster, persistent volumes

## Limitations

- managed k8s may not give access to etcd cluster

## Resource backups
other managed solutions like Velero can be used. Helpful for any imperative commands that have been run on cluster.

## Practice

### Stacked etcd backup
note: if etcd is running on a storage volume, other cloud / services could be used to backup that volume.

```sh
ETCDCTL_API=3 etcdctl --endpoints=https://[127.0.0.1]:2379 \ 
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \ 
  --cert=/etc/kubernetes/pki/etcd/server.crt \ 
  --key=/etc/kubernetes/pki/etcd/server.key \ 
  snapshot save /opt/snapshot.db 
```

verify snapshot: `etcdutl --write-out=table snapshot status snapshot.db`

### Etcd restore checks

`crictl ps` remember kube-apiserver may not be available

### Stacked etcd restore

```sh
# kube-apiserver should be stopped

# verify backup
etcdutl --data-dir /var/lib/etcd-from-backup snapshot restore snapshot.db
```

```sh
# restore
ETCDCTL_API=3 etcdctl --endpoints=https://[127.0.0.1]:2379 \ 
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \ 
  --cert=/etc/kubernetes/pki/etcd/server.crt \ 
  --key=/etc/kubernetes/pki/etcd/server.key \ 
  snapshot restore /opt/snapshot-pre-boot.db 
```

# edit /etc/kubernetes/manifests/etcd.yaml
# update volumes: /var/lib/etcd-from-backup
# if cluster api has changed, update kube-apiserver.yml config
# --etcd-servers=$NEW_ETCD_CLUSTER
# note for kodekloud - i had to delete the etcdctl-controlplane
```sh

# start kube-apiserver
```
