# AWS ROUTE 53 HEALTH CHECKS

## Resources

- [AWS Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)

## Features

- integrated in to CloudWatch metrics
- pass / fail can be based on text of first 5120 bytes of response

## Limitations

- happen outside the VPC!!

## Types

- endpoint
- another health check
- CloudWatch alarm (think throttles on DynamoDB, etc)

## Calculated Health Checks

combines multiple health checks in to one

- use OR, AND, NOT
- supports up to 256 child health checks
- can designate how many child checks are needed to pass

## EC2 Health Checks

- configure CloudWatch Metric checking EC2 `StatusCheckFailed`
- add alarm for above metric
- configure Route53 health check against CloudWatch Alarm

## Healthy Determination

records without health checks are always considered healthy

if no records in a group are healthy, Route53 has to return something so it picks one and returns healthy? guess it has to respond to DNS query with something
