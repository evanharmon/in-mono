# AWS EKS OVERLAY NETWORK

## Features
handles assigning IPs so subnet EIPs don't get eaten up

## Examples
- cilium
- calico

## Limitations
- could still run out of IPs per node
- have to manage an additional layer / daemonset
