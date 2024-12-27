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
- only communicates with kube-apiserver

## Install
```sh
ETCD_VER=v3.5.17
DOWNLOAD_URL=https://storage.googleapis.com/etcd
wget -q --https-only \
  "${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-arm64.tar.gz"
# or curl
curl \
  -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-arm64.tar.gz \
  -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz

tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/etcd-download-test --strip-components=1
mv /tmp/etcd-3.5.17-linux-amd64.tar.gz /usr/local/bin
mkdir -p /etc/etcd /var/libetcd
cp ca.pem kubernetes-key.pem kubernetes.pem /etc/etcd/
```

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