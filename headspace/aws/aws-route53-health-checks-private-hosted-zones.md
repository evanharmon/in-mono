# AWS ROUTE 53 HEALTH CHECKS PRIVATE HOSTED ZONES

## Resources

- [AWS Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)

## How to health check private hosted zone

- setup CloudWatch Metric and CloudWatch Alarm
- point health check to the CloudWatch Alarm

## Failover Records

very annoying - needs public ip address! Health checks happen outside the VPC

steps:

- must assign a Public IP address to an instance in the VPC
- check health of endpoint within VPC by ip address
