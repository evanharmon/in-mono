# AWS ROUTE 53 DNSSEC
DNSSEC stands for DNS Security Extensions

## Resources
- [AWS Route 53 DNSSEC](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dnssec-validation.html)
- [Cloudflare guide to DNS](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Cloudflare guide to DNSSEC](https://www.cloudflare.com/learning/dns/dns-security/)

## Limitations
- results in small outage as enable / disable dnssec can take several minutes
- performing your own DNSSEC validation in a VPC not supported, must use recursive DNS resolution 
- only works for public hosted zones
- only applies to public signed names not forwarded zones

## Features
helps prevent man in the middle (MITM) attacks

- support for Domain Registration and DNSSEC signing