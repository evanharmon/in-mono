# AWS ROUTE53 PRIVATE HOSTED ZONES

## Resources

- [AWS Route 53 Private Hosted Zones](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html)

## Mandatory VPC Settings for Private Hosted Zone

- [AWS VPC DNS Support](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-updating)

DNS resolution: Enabled
DNS hostnames: Enabled

## EC2 Health Checks

- configure CloudWatch Metric checking EC2 `StatusCheckFailed`
- add alarm for above metric
- configure Route53 health check against CloudWatch Alarm

## Failover Records

very annoying - needs public ip address! Health checks happen outside the VPC

steps:

- must assign a Public IP address to an instance in the VPC
- check health of endpoint within VPC by ip address
