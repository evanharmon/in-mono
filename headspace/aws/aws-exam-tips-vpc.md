# AWS EXAM TIPS VPC

## Security Groups

- default security group has rule to allow all inbound to itself for network interfaces / instances

## Launch Configuration Tenancy VS VPC Tenancy

super confusing - see ruleset below

- LC tenancy = null, results in using VPC Tenancy
- LC or VPC tenancy of `dedicated` results in a `dedicated instance`

## VPC Peering

- not for use to allow connectivity for remote branch offices!
- inter-region VPC peering is ok!
- remember routes need to be added between BOTH VPCs to talk to their peer

## Transit VPC

- don't confuse this with a transit gateway
- uses customer managed EC2-based VPN appliances
