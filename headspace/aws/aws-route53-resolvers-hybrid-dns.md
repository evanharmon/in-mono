# AWS ROUTE 53 RESOLVERS / HYBRID DNS
## Resources
- [AWS Route 53 Resolving VPCs and your Network](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html)
- [AWS Route 53 Resolver Rules](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-rules-managing.html)


## Hybrid Network
examples:
- VPC / Peered VPC
- On-premise (Direct Connect or AWS VPN)

## Features

- resolves local domain names for EC2 instances
- supports private hosted zones
- supports public name servers

## Resolver Rules
choose which DNS queries get forwarded to DNS resolvers on your network
- supports Conditonal Forwarding Rules for specific domains and all subdomains to target IP
- System Rules to override Forwarding Rules
- Auto-defined System Rules for private hosted zones / AWS internal

## Inbound Resolver Endpoint
resolve from VPC to on-premise

## Outbound Resolver Endpoint
resolve from on-premise to VPC via forwarding resolver rules

forwards to DNS resolvers on-premise