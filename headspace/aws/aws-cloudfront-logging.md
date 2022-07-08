# AWS CLOUDFRONT LOGGING

## Resources

- [AWS CloudFront Logging](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging.html)

## Logging
- S3 for non real-time
- real-time Kinesis data streams / fire hose

## S3 Logging Bucket Settings

Encryption must be AES-256. KMS will prevent Cloudfront from writing any logs to the s3 bucket

## Unzip Logs

```console
gzip -d 11111111111111.2019-04-25-13.eeeeeeee.gz
```