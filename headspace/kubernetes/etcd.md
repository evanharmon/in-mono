# ETCD

## Resources
- [Etcd github](https://github.com/etcd-io/etcd)
- [Etcd Docs](https://etcd.io/docs/v3.5/)
- [Etcd tooling / libraries](https://etcd.io/docs/v3.5/integrations/)
- [Etcd securing clusters](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#securing-etcd-clusters)
- [Etcd playground / install workflow](http://play.etcd.io/install)

## Features
consistent distributed key-value store for distributed systems.

- stores as docs / pages
- listens on port 2379 for clients, 2380 for server to server

## Deployment types

### Stacked
etcd database is run on same node as controlplane

### External
etcd database runs on a separate node from the controlplane (potentially separate server and as a service)

### Certificates
requires root ca cert

- etcdserver.crt, etcdserver.key
- etcdpeer1.crt, etcdpeer1.key

example flags:
```
--peer-cert-file=/path/etcdpeer1.crt
--peer-client-cert-auth=true
--peer-key-file=/etc/kubernetes/etcd/peer.key
--peer-trusted-ca-file=/etc/kubernetes/pki/etcd/ca.crt
--trusted-ca-file=/etc/kubernetes/pki/etcd/ca.crt
```