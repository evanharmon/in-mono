# AWS VPC TRANSIT GATEWAY

transitive peering
network transit hub / interconnect for VPC and on-premise networks
hub and spoke connections

## Resources

- [AWS VPC Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html)
- [AWS VPC Transit Gateway Blog Single Internet Exit Point from multiple VPCs](https://aws.amazon.com/blogs/networking-and-content-delivery/creating-a-single-internet-exit-point-from-multiple-vpcs-using-aws-transit-gateway/)
- [Cloudsoft Blog Transit Gateway Share VPN](https://cloudsoft.io/blog/aws-transit-gateway-in-action-vpn-to-vpcs-connectivity)

## Features

- traffic automatically encrypted
- traffic never traverses public internet
- can be shared cross-account with Resource Access Manager
- can peer multiple transit gateways that are in diff regions

## Limitations

- created per region
