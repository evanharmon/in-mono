# KUBERNETES NETWORKING DNS

## Resources

- [Kubernetes networking DNS for services and pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)
- [Kubernetes DNS-Based Service Discovery](https://github.com/kubernetes/dns/blob/master/docs/specification.md)

## Features

- publishes info from pods / services to program DNS
- default DNS search list contains namespace and cluster's default domain
- DNS records created for services and pods
- DNS policy can be set on a per-Pod basis

## Pod Hostname

default set to the value of `metadata.name`
use `hostname` pod field to customize
use `subdomain` field to sub-group namespace

## Expand upon Pod DNS queries

use `/etc/resolv.conf`

## DNS policy options for Pods

ClusterFirst is the default NOT default. 🤯

- Default
- ClusterFirst
- ClusterFirstWitHostNet
- None

## Services dns resolustion

FQDN format: <hostname>.<namespaces>.<type>.<root>
example `my-svc.apps.svc.cluster.local`

`curl http://my-svc.apps.svc.cluster.local`

## Enable pod dns resolution
dns records for pods are not created by default. Can be enabled in coreDNS config.
created in the format of `10-244-2-5` replacing `.` with `-` in IP addresses.
pod name is NOT used

FQDN format: <hostname>.<namespaces>.<type>.<root>

`curl http://10-244-2-5.apps.pod.cluster.local`