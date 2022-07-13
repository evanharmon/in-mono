# AWS ELASTIC LOAD BALANCING

## Resources
- [AWS Elastic Load Balancing Docs](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)
- [AWS ELB Request Routing Algorithms](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#request-routing)

## In / Out of Service
dependent on health checks

## Subnets vs Availability Zones (AZs)
Always use Subnets property when working in a VPC

## Security Best Practice
use security groups instead of IPs where possible

## End User Browser Experience
Monitor the latency of the elb

## Metrics For Scaling
SurgeQueueLength
SpillOverCount - actively being rejected