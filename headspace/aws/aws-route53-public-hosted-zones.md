# AWS ROUTE53 PUBLIC HOSTED ZONES

## Resources

- [AWS Route 53 Public Hosted Zones](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html)

## Features
can be domains or subdomains `dev.mydomain.com`

## Best practices
- lower the NS record TTL's to 60s or 3600s (1 hour)

## Create hosted zone
Remember to create / edit the NS records ttl down from 48 hours to 1 hour!