# LINUX DNS

## Name Resolution

### Host file
entries can be added to `etc/hosts`

### Switching
`/etc/nsswitch.conf` can be adjusted to use host files or DNS in a specific order

```conf
hosts:      files dns
```

### Name server
name servers can be specified in `/etc/resolv.conf`

### Search entries
example in `/etc/resolv.conf`

```
search 55834cbb51724bfd.svc.cluster.local svc.cluster.local cluster.local
```