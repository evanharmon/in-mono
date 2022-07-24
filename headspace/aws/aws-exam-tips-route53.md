# AWS EXAM TIPS Route53

## Routing Policies

- there is no such thing as a round-robin routing policy

## Resolvers

outbound is OUT from on-premise

- Inbound Resolver Endpoint: resolves FROM VPC to on-premise
- Outbound Resolver Endpoint: resolves TO VPC from on-premise
- only External uses forwarding resolver rules
- Resolver Rules decide whether to route to on-premise or to stay in VPC
