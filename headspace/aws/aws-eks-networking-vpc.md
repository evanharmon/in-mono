# AWS EKS VPC

## Resources
- [AWS EKS vpc and subnet considerations](https://docs.aws.amazon.com/eks/latest/best-practices/subnets.html)

## Features
remember if you want ipv6 (dual-stack) - has to be enabled at creation!
- nodes have an ENI and take up an IP address

## Best practices
- one VPC per EKS cluster to avoid running out of IPs
- use an overlay network like Cilium / Calico to assign IPs and not eat up subnet IPs
- use bigger subnet CIDR's like `/19` to have enough IPs

## Limitations
- you can run out of IP's for nodes / pods as they eat up via ENIs

## Example IP limitations
`10.0.1.0/24` - 250 Usable IP addresses
`10.0.1.0/20` - 4091 Usable IP addresses
`10.0.1.0/19` - 8186 Usable IP addresses

## Consumers of IPs in subnets
all the below can eat up IPs in the subnet
- nodes
- pods
- ENI's (can be up to 10!!! for big nodes)
- privatelink endpoints