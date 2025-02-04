# KUBERNETES BACKUP AND RESTORE EXTERNAL

## External services

### External etcd backup

```sh
ETCDCTL_API=3 etcdctl \
  --endpoints https://127.0.0.1:2379 \
  --cacert=/etc/etcd/pki/ca.pem \
  --cert=/etc/etcd/pki/etcd.pem \
  --key /etc/etcd/pki/etcd-key.pem \
  snapshot save /opt/snapshot.db
```

### External etcd restore

```sh
# kube-apiserver MUST be stopped
service kube-apiserver stop

# backup restore with modern `etcdutl` instead
etcdutl --data-dir /var/lib/etcd-from-backup snapshot restore snapshot.db
```

```sh
# restore
ETCDCTL_API=3 etcdctl --endpoints=https://[127.0.0.1]:2379 \ 
  --cacert=/etc/etcd/pki/ca.pem \ 
  --cert=/etc/etcd/pki/etcd.pem \ 
  --key=/etc/etcd/pki/etcd-key.pem \ 
  --data-dir=/var/lib/etcd-from-backup \
  snapshot restore /opt/snapshot.db 
```

```sh
# make sure etcd owns the new restore directory!
chown -R etcd:etcd /var/lib/etcd-from-backup

# update etcd.service: update --data-dir arg for /var/lib/etcd-from-backup
`vi /etc/systemd/system/etcd.service`

systemctl daemon-reload
systemctl restart etcd

service kube-apiserver start
```

Sometimes the below need to be restarted to ensure stale data isn't being used:
- kube-scheduler, kube-controller-manager, kubelet