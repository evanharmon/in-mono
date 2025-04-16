# AWS VPC

## Resources

- [AWS VPC Docs](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

## Limitations

- VPC CIDR blocks CANNOT be changed
- min IPv4 CIDR block is /28
- max IPv4 CIDR block range is /16
- max 5 VPCs per region
- max 200 subnets per VPC

## Best practices
- always refer to AZ `zone id` instead of name to get same physical location across multiple accounts

## Deleting VPC

all EC2 instances must be terminated first

## Availability Zones

names of AZs are randomly applied per account.
'eu-west-1b' may not be the same location
between different accounts
prefer `zone id` instead
