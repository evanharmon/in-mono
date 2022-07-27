# AWS EXAM TIPS VPC

## Security Groups

- default security group has rule to allow all inbound to itself for network interfaces / instances

## Tenancy

- watch out for `dedicated VPC` as this is more costly since hardware is dedicated

## Launch Configuration Tenancy VS VPC Tenancy

super confusing - see ruleset below

- LC tenancy = null, results in using VPC Tenancy
- LC or VPC tenancy of `dedicated` results in a `dedicated instance`

## VPC Peering

- not for use to allow connectivity for remote branch offices!
- inter-region VPC peering is ok!
- remember routes need to be added between BOTH VPCs to talk to their peer
- a VPC can peer with two separate VPCs that have the same CIDR block. Routing will be tricky though

## Transit VPC

- don't confuse this with a transit gateway
- uses customer managed EC2-based VPN appliances

## Flow Logs

- can be setup for ENI's on EC2 instances, along with other EC2 sources like load balancers...
- ONLY destinations are S3 and CloudWatch

## Endpoints

- gateway endpoints are just S3 and DynamoDB as they are fully public
- interface endpoint can also be used for S3 / Dynamo to keep traffic private
- interface endpoints are compatible with gateway endpoints
