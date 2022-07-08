# AWS APPLICATION LOAD BALANCER
load balancer with Layer 7 routing

## Resources
- [AWS Application Load Balancer Docs](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
- [AWS ALB Target Groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html)

## Features
- cross-zone load balancing on by default and cannot be disabled

## Limitations
- ~400ms latency

## Server Name Indicator
allows ALB to serve multiple domain certs
client asks for specific server name in SSL handshake

## Uses
- HTTP, HTTPS, WebSockets
- great for routing some requests to ECS and others to Lambda

## Target Group Sources
- EC2 instances
- Auto Scaling Groups
- ECS tasks
- Lambda

## Target Types
- instance
- ip
- lambda
