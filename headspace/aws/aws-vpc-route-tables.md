# AWS VPC ROUTES

## Resources

- [AWS VPC Route Tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)

## Features

- most specific route wins

## Best Practices

- create route table for every subnet for resilience in case an AZ goes down
- don't put a path in public internet in the main route table

## Aggregate Burst Network Traffic

- spread instances across multiple AZs to minimize traffic concentration and
  maximize fault tolerance
- only go for Placement Groups if the above option doesn't help

## Route Tables

- [Routing 101](https://medium.com/@mda590/aws-routing-101-67879d23014d)
