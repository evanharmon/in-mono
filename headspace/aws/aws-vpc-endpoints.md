# AWS VPC ENDPOINT

## Resources

- [AWS VPC Endpoint Differences](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3)

## Gateway Endpoints

- specified in route tables
- DO NOT support on-premise
- DO NOT support cross region

## Interface Endpoints

- route via a private IP TO S3, etc
- require endpoint specific S3 DNS names
- allow access from on prem
- allow cross region via vpc peeing or transit gwy
