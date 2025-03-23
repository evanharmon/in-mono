# AWS ROUTE 53 ALIAS

## Resources

- [AWS Route53 alias and non-alias records](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html)

## Features
special A style record pointing to an AWS resource
- can be used for root domain
- native health check built in

## Limitations

- only available to point to AWS resources
- cannot set Alias record for EC2 DNS name
- TTL is hard-coded at 60 seconds and cannot be changed

## Target Types

- ELB
- CloudFront Distribution
- API Gateway
- Elastic Beanstalk
- S3 Websites
- VPC Interface Endpoints
- Global Accelerator
- Route53 record in the hosted zone
