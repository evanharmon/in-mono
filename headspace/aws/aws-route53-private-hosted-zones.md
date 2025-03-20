# AWS ROUTE53 PRIVATE HOSTED ZONES

## Resources

- [AWS Route 53 Private Hosted Zones](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html)
- [AWS VPC DNS Support](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-updating)

## Mandatory VPC Settings for Private Hosted Zone

DNS resolution: Enabled
DNS hostnames: Enabled

## Best practices
- lower the NS record TTL's to 60s or 3600s (1 hour)

## Create hosted zone
Remember to create / edit the NS records ttl down from 48 hours to 1 hour!