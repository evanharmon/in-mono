# AWS VPC SUBNETS


## Resources

- [AWS VPC Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)

## Features
- subnets not assigned to a route table automatically assigned to main route table
- 1 Subnet = 1 AZ

## Limitations

- between /28 and /16 CIDR mask
- AWS allows public address range but does not recommend
- subnet can only be assigned to one ACL at a time
- subnet must have be associated with a network ACL. Default ACL used if none associated

## Example CIDRS
`10.0.1.0/24` - 250 Usable IP addresses

## Route Tables

- routing changes happen immediately
- subnet must be associated with a route table

## IP Collisions

Any subnet in a vpc overlapping with a home/corporate network will not be
reachable from that home/corp network

## IP Addresses Reserved For AWS

First 4 and last reserved

- 10.0.0.0 Network Address
- 10.0.0.1 VPC Router
- 10.0.0.2 Typically DNS Server
- 10.0.0.3 Reserved for future use
- 10.0.0.255 broadcast not supported so it's unavailable as a port

## Public Subnets

subnet is public when:

- route table has `0.0.0.0/0` pointing to an internet gateway (IGW)

## Private Subnets

should NOT have a `0.0.0.0/0` route pointing to an IGW

can access the internet with a route pointing to a NAT (instance or gateway) in a public subnet

- `0.0.0.0/0` points to nat gateway

## IPv6 Private Subnet

- create an egress-only internet gateway (IGW) in public subnet
- add the IPv6 all `::/0` and point to egress-only IGW


## Intra subnets
these are specific subnets with NO internet access - not even egress thru NAT.
Helpful for lambda or other things that should ONLY be communicating inside VPC
