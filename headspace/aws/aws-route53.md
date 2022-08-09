# AWS ROUTE 53

## Resources

- [AWS Route 53 Docs](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
- [AWS Route 53 Logging, Monitoring, Tagging](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/integration-with-other-services.html#integration-logging-monitoring-tagging)

## Security

AWS Shield on by default

## Record Types

- A: map hostname to IPv4
- AAAA: map hostname to IPv6
- CNAME: map hostname to another hostname
- NS: Name server for hosted zone

## Options for testing

Buy a throwaway domain for testing that is owned / managed by one of your AWS
accounts. Using these domains in test setups avoids having to make multiple
requests to other groups / IT for dns work, etc.

## Limitations

- 50 Domains per AWS account - request for higher limit
- CNAME cannot point to a Zone Apex / root level domain, must use Alias if available

## Logging

- CloudTrail

## Monitoring

- CloudWatch
