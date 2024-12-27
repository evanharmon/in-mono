# KUBERNETES COREDNS

## Resources

- [Kubernetes coredns plugins](https://coredns.io/plugins/kubernetes/)

## Features
dns server is deployed in the cluster

- old kubernetes was `kube-dns`
- coredns is recommended server now
- option `pod` available to create a dns record for each pod (disabled by default)

## Deployment
deployment of replica set of 2 in `kube-system` namespace for redundancy

## DNS resolution
uses nameserver specified on node since `/etc/resolv.conf` will point to node

service `kube-dns` is automatically created and specified as nameserver on pods by kubernetes
kubelet is responsible for setting the default nameserver on new pods.

## Services
kubelet adds nameserver to to `/etc/resolv.conf`
kubelet creates a search entries as well:
- default.svc.cluster.local
- svc.cluster.local
- cluster.local

## Pod creation
dns record is added to server with pod IP.
note: search entries are NOT added for pod types so `host

## Configuration
Corefile passed in as a configmap so it's editable.
This is where the top level domain name of the cluser is set like `cluster.local`

/etc/hosts
```
192.168.1.10        web
192.168.1.11        db
```

```sh
# example file with plugins
cat > /etc/coredns/Corefile
.:53 {
    errors
    health
    kubernetes cluster.local in-addr.arpa ip6.arpa {
      pods insecure
      upstream
      fallthrough in-addr.arpa ip6.arpa
    }
    prometheus :9153
    proxy . /etc/resolv.conf
    cache 30
    reload
}
```
`./coredns`

### Example configmap for coredns config

```yml
apiVersion: v1
data:
  Corefile: |
    .:53 {
        errors
        health
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa {
           pods insecure
           fallthrough in-addr.arpa ip6.arpa
           ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf {
           max_concurrent 1000
        }
        cache 30
        loop
        reload
        loadbalance
    }
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
```