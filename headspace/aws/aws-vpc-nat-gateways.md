# AWS VPC NAT GATEWAY

## Resources

- [AWS VPC NAT Gateway Testing](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-testing)

## Features

- natgateway with status of 'failed' is deleted in about an hour automatically
- can be TCP, UDP, or ICMP protocol

## Limitations

- cannot be associated with a security group
- do not support ClassicLink connections
- natgateway with a status of pending, deleting, or available counts against the
  limit
- does not support port forwarding, bastion servers, or traffic metrics
- elastic network interface (ENI) is created upon NAT creation and cannot be modified

## Best Practice

- create a NAT per AZ for failover tolerance
- Use ACLs to control traffic to / from subnets

## IAM

- by default, IAM users do not have permission to work with NAT gateways
- does not support resource-level permissions for ec2:_NatGateway_ API operations

## Connection Limitations

- does not support IP fragmentation for TCP (Use a NAT instance instead)
- idle connections dropped after 5 minutes
- do not support IPSec protocol
- supports up to 65000 simulatenous connections to a unique destination

## Routing

STATEFUL

- cannot send traffic over VPC endpoints, VPN Connections, AWS Direct Connect, or VPC Peering Connections
- cannot route traffic through gateway to VPC Peering Connection, VPN Connection, or AWS Direct Connect
- adjust the subnets route table to route directly to these resources. Works bc the resource routing will be more specific than the nat routing 0.0.0.0/0

## Communication Across AZ's

- communicate across AZ's but are based in a single AZ
- if that AZ goes down, internet access goes down to instances/resources using
  that NAT from other AZs

## BURST

support burst rate up to 10GBs
If you need more, create a NAT per subnet and distribute the workload across
subnets

## EIPs

Cannot be disassociated from a NAT instance after it's created. You would have
to terminate the NAT instance to free that elastic ip

## Ports

NATs use ports 1024 - 65535

## Testing

- use traceroute and see if the private ip address of that nat instance comes up
- use a third-party website to make sure the traffic ip address is the NAT
  public ip address

## IPv6
Allows IPv6 only clients to communicate with IPv4 only services
`NAT64_DNS64_RESERVED_PREFIX = "64:ff9b::/96"`
then NAT gateway has a route with above IPv6 prefix in a dual-stack VPC
