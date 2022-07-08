# AWS ROUTE 53 ALIAS

## Alias
- only available to point to AWS resources
- can be used for root domain
- native health check built in
- no TTL

## Target Types
- ELB
- CloudFront Distribution
- API Gateway
- Elastic Beanstalk
- S3 Websites
- VPC Interface Endpoints
- Global Accelerator
- Route53 record in the hosted zone

## Limitations
- cannot set Alias record for EC2 DNS name