# AWS CLOUDFRONT ORIGINS

## Resources

- [AWS CloudFront Origins](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
- [AWS CloudFront Origin Groups Failover](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html)

## Supported Origins

Supports non-AWS origin servers through Route 53
Distinguishes between multiple origins in the same distribution
Origin ID Must be Unique

- S3
- EC2
- ALB
- Lambda function URL
- Route 53
- custom origin (like API Gateway or HTTP backend)
- MediaStore container / MediaPackage channel
- origin groups (for failover / high availability)

## Limitations

- CloudFront allows a config where the hostname and origin is the same. DON'T create this loop
