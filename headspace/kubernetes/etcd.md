# ETCD

## Resources
- [Etcd github](https://github.com/etcd-io/etcd)
- [Etcd Docs](https://etcd.io/docs/v3.5/)
- [Etcd tooling / libraries](https://etcd.io/docs/v3.5/integrations/)


## Features
consistent distributed key-value store for distributed systems.

- stores as docs / pages
- listens on port 2379 for clients, 2380 for server to server

## Deployment types

### Stacked
etcd database is run on same node as controlplane

### External
etcd database runs on a separate node from the controlplane (potentially separate server and as a service)