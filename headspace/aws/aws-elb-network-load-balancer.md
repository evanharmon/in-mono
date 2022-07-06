# AWS ELB NETWORK LOAD BALANCER
load balancer with Layer 4 routing 

## Resources
- [AWS Network Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
- [AWS Network Load Balancer Target Groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html)

## Features
- one static IP per AZ
- cross-zone load balancing disabled by default and extra charges for inter AZ data

## Limitations
- ~100ms latency

## Uses
- TCP, TLS (Secure TCP), UDP

## Target Group Sources
- EC2 instances
- private IP addresses
- Application Load Balancer

## Target Types
- instance
- ip (in private range)
- alb

## Why ALB Target?
Allows to keep features of NLB but also utilize features of ALB