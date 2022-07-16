# AWS KINESIS DATA FIREHOSE

load streaming data from producers, transforms, and writes to destinations

## Resources

- [AWS Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html)
- [AWS Kinesis Data Firehose Data Delivery](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html)
- [AWS Kinesis Data Firehose Using Kinesis Agent](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-agents.html)

## Features

- fully managed so no scaling work
- near real time
- support for EC2 / CloudWatch Logs ingestion via Kinesis Agent

## Limitations

- no data storage or replay
- no way to send data directly from S3 events
- 60 seconds lowest latency for non full batches
  OR
- 1 MB of data

## S3 as Source Features

buffer size: 1 - 128 MB
buffer interval: 60 - 900 seconds

## Destinations

can also copy original data to diff s3 bucket than transforms

supports:

- S3 Bucket
- Redshift via S3 copy
- OpenSearch
- third party service
- custom destination HTTP endpoint

## Destination Failures

- can be configured to write to a different S3 bucket
