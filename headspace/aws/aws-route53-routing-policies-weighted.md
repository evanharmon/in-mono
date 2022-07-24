# AWS ROUTE 53 ROUTING POLICIES WEIGHTED

## Resources

- [AWS Route 53 Weighted Routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html)

## Features

- route traffic to multiple resources in proportions specified
- good for A/B testing in small portion of user base, load balancing, etc
- supports private hosted zone
- supports Health Check

## Weights

value from 0 - 255

weight 0: turn off sending traffic
weight 26: ~10% of traffic routes to this resource
