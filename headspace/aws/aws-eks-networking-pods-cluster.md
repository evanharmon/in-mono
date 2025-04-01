# AWS EKS POD / CLUSTER NETWORKING

## Resources
- [EKS alternate CNIS](https://docs.aws.amazon.com/eks/latest/userguide/alternate-cni-plugins.html)
- [Kubernetes networking model](https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model)

## Features
requires flat networking for pods
- all pods have IP addresses that can connect to each other

## Requirements
- all pods need to be able to talk to all the other pods
- all system daemons (including kubelet) running on node can communicate with pods on same node
- pods using host network must be able to contact all other pods on all other nodes without NAT

## Limitations
- all pods have their own IP!!
- pods can eat up IPs in subnet via their own ENI!!

below not supported on pod networking
- NAT traversal
- VLAN

## Difference to three-tier arch
so all the pods are basically in the same tier

where as three tier had:
1. Web server tier
2. Application tier
3. Database tier

and only app tier could talk to db tier, etc.
In kubernetes / eks - a web pod can communicate with a db pod via IP

## Segmentation and isolation
Has to happen a layer ABOVE networking
