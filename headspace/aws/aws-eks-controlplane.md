# AWS EKS CONTROLPLANE

## Resources
- [AWS EKS Clusters doc](https://docs.aws.amazon.com/eks/latest/userguide/clusters.html#:~:text=The%20control%20plane%20runs%20in,set%20of%20Amazon%20EC2%20instances.)

## Features
AWS managed controlplane for EKS
- runs in an account managed by AWS
- runs in AWS managed VPC that is NOT visible in the customer account
- provisioned across multiple AZs
- fronted by a Network Load Balancer
- each controlplane is single-tenant and unique

## Components

- etcds
- schedulers
- controller managers
- OIDC endpoint
- add-ons
- Node Groups
- api servers
- authentication (config map is old way - use access entries now)

logging to cloudwatch, etc

## ENIs
on creation - up to two ENI's are created on dataplane for communicating with your VPC subnets.
Is this right? Can it be changed? that means you can 3+ subnets in your VPC for eks but really only have HA for 2!!

### Etcd
all data stored encrypted with AWS KMS
