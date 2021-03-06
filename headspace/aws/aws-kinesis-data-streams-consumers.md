# AWS KINESIS DATA STREAMS CONSUMERS

## Resources

- [AWS Kinesis Data Streams Consumers](https://docs.aws.amazon.com/streams/latest/dev/building-consumers.html)
- [AWS Kinesis Data Streams KCL](https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html)

## Limitations

assumes Consumer Enhanced Fan-Out

- 2 MB / s reads per shard, per enhanced consumer (push)
- only DynamoDB supported for Lease Table

## Checkpoints

## Consumer Options

- AWS SDK
- EC2
- Lambda
- Kinesis Data Analytics
- Kinesis Data Firehose
- Kinesis Consumer Library (KCL)

## KCL

- requires JAVA to be installed, even if using other languages
- uses leases to coordinate
- checkpoints processed records
- balanced shard-worker associations (leases)

## Lease

binding between worker and a shard

## Lease Table

unique DynamoDB table - only DynamodB supported!

- tracks what shards are leased and processed by workers
