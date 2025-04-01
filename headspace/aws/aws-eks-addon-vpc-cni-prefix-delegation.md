# AWS EKS ADDON VPC CNI PREFIX DELEGATION

## Resources
- [EKS workshop prefix delegation](https://www.eksworkshop.com/docs/networking/vpc-cni/prefix/)

## Features
increases the number of IPs available to nodes, thereby increasing pod density
- assigns `/28` (16 IP addresses) IPv4 address prefixes to ENIs
- route propogates to VPC / subnet
- turned on by default and required for IPv6 (dual-stack) vpcs

## Limitations
- requires nitro-based ec2 instances
- IPv4: requires consistent / available blocks of /28 - no super small subnet CIDR blocks!
- IPv6: there is no pod level dual-stack - they only get IPv6 IPs!!!
- IPv6: dual-stack is only at node level
- IPv6: IPv4 node ENI IP can become a bottleneck as IPv6 traffic goes out here

## IPv4 process
vpc cni does the below steps:
1. Assigns one or more prefixes to primary ENI
pre-allocates a prefix for faster pod startup by maintaining a warm pool
- makes a route inside vpc-cni for /28 to the one IP on the one Node

2. Request additional prefixes as more pods scheduled
- attempts first on existing ENI
- requests new ENI's up to limit if existing at capacity for IPs

## IPv6 process
vpc cni does the below steps:

1. Assigns IPv4, IPv6, and IPv6/80 to node eni

2. Pods get an IPv6 address NOT an IPv4 address
Source NAT'd on node
- uses internal `169` service to route IPv6 traffic out to IPv4
- locally on node, goes out IPv4 of ENI

## Verify ENI and prefix assignment

```bash
# Deploy a nginx as an example
k run nginx --image nginx --port 80
# Get nodename from nginx pod
k get pod -o jsonpath='{.spec.nodeName}'
k get nodes
k describe node <node-name>
aws ec2 describe-network-interfaces --query 'NetworkInterfaces[*].{ID:NetworkInterfaceId,PrivateIpAddress:PrivateIpAddress}'
aws ec2 describe-route-tables --query 'RouteTables[*].Routes'
```

## Check that prefix delegation and warm-target turned on
`k describe ds -n kube-system aws-node | grep ENABLE_PREFIX_DELEGATION: -A 3`
