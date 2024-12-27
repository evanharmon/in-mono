# ETCDCTL

## Resources
- [Etcdctl](https://github.com/etcd-io/etcd/tree/main/etcdctl)
- [Interacting with Etcd](https://etcd.io/docs/v3.4/dev-guide/interacting_v3/)

## Features

- can set a lease (TTL)
- can keep-alive by setting lease repeatedly
- can revoke a lease

## Set default API version

`export ETCDCTL_API=3`

## Specify certs

```sh
...
--cacert /etc/kubernetes/pki/etcd/ca.crt
--cert /etc/kubernetes/pki/etcd/server.crt
--key /etc/kubernetes/pki/etcd/server.key
```

## Commands
### Put key value

`etcdctl put foo bar`

### Put key value with TTL

`etcdctl put --lease=32695410dcc0ca06 foo bar`

### Get key value

```sh
$ etcdctl get mykey -w=json
{"header":{"cluster_id":14841639068965178418,"member_id":10276657743932975437,"revision":15,"raft_term":4}}
```

### Get secret

```sh
etcdctl \
   --cacert=/etc/kubernetes/pki/etcd/ca.crt   \
   --cert=/etc/kubernetes/pki/etcd/server.crt \
   --key=/etc/kubernetes/pki/etcd/server.key  \
   get /registry/secrets/default/secret1 | hexdump -C
```

### get list of members

```sh
etcdctl \
  --cacert /etc/etcd/pki/ca.pem \
  --cert /etc/etcd/pki/etcd.pem \
  --key /etc/etcd/pki/etcd-key.pem \
  member list -w table
```

### get all key names
`etcdctl get / --prefix --keys-only`