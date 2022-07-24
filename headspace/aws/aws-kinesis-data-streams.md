# AWS KINESIS DATA STREAMS

real-time streaming ingestion service

## Resources

- [AWS Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)
- [AWS Kinesis Creating and Managing Streams](https://docs.aws.amazon.com/streams/latest/dev/working-with-streams.html)
- [AWS Kinesis Data Streams FAQ](https://aws.amazon.com/kinesis/data-streams/faqs/)

## Features

- real time (~200 ms)
- data is immutable
- retention default is 24 hours and can go up to 1 year
- supports batching
- supports replay / reprocess
- supports multiple consumers
- records ordered per shard

## Limitations

- NO auto scaling if using provisioned mode
- limit of 1 MB / s write to a shard

## Use Cases

- realtime analytics
- high frequency event data such as clickstream data
- multiple apps consuming same stream concurrently
- consuming same records against a few hours later
- routing related records to same record processor (MapReduce)

## Supported AWS Service Sources

- DynamoDB
- Aurora
- CloudWatch
- IoT Core

## Scaling

done via shard splitting or merging

## Concepts

- data records grouped in to a data stream
- data records in a stream distributed across shards
