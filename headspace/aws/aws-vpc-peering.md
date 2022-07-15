# AWS VPC PEERING

connect vpcs over AWS network

## Resources

- [AWS VPC Peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)
- [AWS VPC Peering Unsupported Peering Configurations](https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html)

## Features

- supports cross-account vpc peering
- supports peered vpc in another region
- supports referencing security groups between peers

## Limitations

- NOT transitive. A -> B and A -> C does not mean B can talk to C
- cannot have ANY overlapping CIDRs
- subnets have to be adjusted as well to communicate to other vpc peer
- cannot access VPN, internet gateway, or gateway VPC endpoints that exist in the vpc peer

## No Edge to Edge Routing

example: VPC A peered to VPC B cannot connect to on-premise VPN connection on VPC B

another example: cannot peer with a VPC and access the internet thru the peer vpc internet gateway
