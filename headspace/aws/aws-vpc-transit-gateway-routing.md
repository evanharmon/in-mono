# AWS VPC TRANSIT GATEWAY ROUTING

transit gateway can act like a centralized router

## Resources

- [AWS VPC Transit Gateway Routing](https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-isolated.html#transit-gateway-isolated-routes)
- [AWS VPC Transit Gateway Centralized Outbound Routing Example](https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-nat-igw.html)

## Features

- supports IP Multicast routing
- supports edge to edge routing
- able to isolate which VPCs can talk to each other

## Limitations

- still cannot use an S3 / DynamoDB VPC gateway endpoint from a different VPC

## Edge to Edge Routing

supported so can access Nat Gateway, PrivateLink, EFS, etc in other attached VPCs
thru Transit Gateway
