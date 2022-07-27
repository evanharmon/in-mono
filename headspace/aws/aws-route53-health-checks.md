# AWS ROUTE 53 HEALTH CHECKS

health checkers operate outside VPC on public

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

## How to health check private hosted zone

- setup CloudWatch Metric and CloudWatch Alarm
- point health check to the CloudWatch Alarm
