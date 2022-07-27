# AWS GLOBAL ACCELERATOR

service to create accelerators to improve app performance for local and global users
by using AWS internal network

## Resources

- [AWS Global Accelerator Docs](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html)
- [AWS Global Accelerator Use Cases](https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-benefits-of-migrating.html)
- [Cloudflare guide to Anycast](https://www.cloudflare.com/learning/cdn/glossary/anycast-network/)

## Anycast

resilient to high traffic valume, network congestion, DDoS attacks

## Use Cases

- great for VoIP, online gaming, non-HTTP, latency-sensitive apps
- can be used for blue / green traffic split as well

## Features

- uses AWS internal network to route application
- uses 2 static IP with Anycast to send traffic to edge locations then on to your app
- more consistent performance
- supports IP address preservation for Application Load Balancers (ALB) and EC2 instances
- supports IP address preservation for custom routing accelerators
- use endpoints weights to split traffic

## Limitations

- IP address preservation NOT supported for NLBs and EIPs endpoints

## Endpoints for Standard Accelerators

avoid sending traffic directly to endpoints as can cause connection collisions

- Application Load Balancer (ALB)
- Network Load Balancer (NLB)
- EC2 instance
- Elastic IP (EIP)?

## Health Checks

performed by Global Accelerator

- failover happens in less than 1 minute

## Security

backed by AWS Shield

- only needs 2 whitelisted IPs
