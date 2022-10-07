# AWS CLOUDFRONT ORIGIN ACCESS CONTROL S3

## Resources

- [AWS CloudFront Origins S3 Bucket](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#using-s3-as-origin)
- [AWS CloudFront Origin Access Control S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)

## Features

- replaces the legacy origin access identity mechanism

## Private S3 Bucket

steps:

- create private s3 bucket
- create CloudFront distribution
- make sure to use FULL s3 domain for bucket like `eph-music.webapp-pocs.21-day-challenge-us-east-1.s3.us-east-1.amazonaws.com`
- create Origin Access
- add OAC permissions to S3 bucket via bucket policy
- update CloudFront distribution origin to use OAC

example read only s3 bucket policy

```json
{
  "Version": "2012-10-17",
  "Statement": {
    "Sid": "AllowCloudFrontServicePrincipalReadOnly",
    "Effect": "Allow",
    "Principal": {
      "Service": "cloudfront.amazonaws.com"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*",
    "Condition": {
      "StringEquals": {
        "AWS:SourceArn": "arn:aws:cloudfront::111122223333:distribution/EDFDVBD6EXAMPLE"
      }
    }
  }
}
```
