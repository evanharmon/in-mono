# AWS ELB NETWORK LOAD BALANCER (NLB)

load balancer with Layer 4 routing

## Resources

- [AWS Network Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
- [AWS Network Load Balancer Target Groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html)

## Features

- one static IP per AZ
- cross-zone load balancing disabled by default and extra charges for inter AZ data
- TCP, TLS (Secure TCP), UDP

## Limitations

- ~100ms latency

## Target Group Sources / Types

- EC2 instances
- private IP addresses
- Application Load Balancer (ALB)

## Why ALB Target?

Allows to keep features of NLB but also utilize features of ALB
