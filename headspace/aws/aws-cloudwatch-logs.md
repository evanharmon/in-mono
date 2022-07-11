# AWS CLOUDWATCH LOGS

## Resources

- [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
- [AWS CloudWatch AWS Services that publish to CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/aws-services-sending-logs.html)
- [AWS CloudWatch Logs Data Retention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#SettingLogRetention)

## Features

- by default, logs are kept indefinitely and never expire
- define log expiration policies to prevent cost buildup

## Limitations

- export to S3 bucket must be encrypted with SSE-S3
- export to SSE-KMS bucket NOT supported
- export to S3 can take up to 12 hours

## Destinations

- export to S3
- Kinesis Data Streams
- Kinesis Data Firehose
- Lambda
- Lambda -> OpenSearch