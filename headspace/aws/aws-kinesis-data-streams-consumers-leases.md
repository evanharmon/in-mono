# AWS KINESIS DATA STREAMS CONSUMERS LEASES

## Resources

- [AWS Kinesis Data Streams KCL](https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html)
- [AWS Kinesis Data Streams KCL using a Lease Table](https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html#shared-throughput-kcl-consumers-leasetable)

## Limitations

- only DynamoDB supported for Lease Table
- each application MUST have its own DynamoDB lease table, otherwise a consumer could get a bad lease

## Checkpoints

most recent checkpoint sequencer # for shard. Unique across all shards in data stream

## Lease

binding between worker and a shard

## Lease Table

unique DynamoDB table - only DynamodB supported!

- tracks what shards are leased and processed by workers
- Shard IDs are used as primary key
