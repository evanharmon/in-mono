# AWS CLOUDTRAIL

## Resources

- [AWS CloudTrail Docs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)
- [AWS CloudTrail Receive Logs From Multiple Accounts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-receive-logs-from-multiple-accounts.html)
- [AWS CloudTrail Turning On Cloudtrail In Multiple Accounts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/turn-on-cloudtrail-in-additional-accounts.html)
- [S3 Server Access Logging vs CloudTrail](https://www.netskope.com/blog/aws-s3-logjam-server-access-logging-vs-object-level-logging)
- [AWS CloudTrail S3 Bucket Policy For CloudTrail Multiple Accounts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-set-bucket-policy-for-multiple-accounts.html)

## Logging CloudTrails To Other Accounts

See resource links above

- S3 Bucket policy has to be adjusted to allow other accounts put access
- S3 Bucket ACL has to be adjusted to give access to each account's canonical id
- First CloudTrail to the bucket MUST be the same account where the bucket resides

## Logs

- logs delivered every 5 minutes
- logs can be aggregated to single file from multiple regions in to single
  bucket

## Best Practices

- create trail
- apply to all regions
- enable log file integrity
- integrate with cloudwatch logs
