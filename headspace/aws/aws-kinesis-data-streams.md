# AWS KINESIS DATA STREAMS

real-time streaming ingestion service

## Resources

- [AWS Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)
- [AWS Kinesis Creating and Managing Streams](https://docs.aws.amazon.com/streams/latest/dev/working-with-streams.html)

## Features

- real time (~200 ms)
- immutable

## Limitations

- have to manage scaling yourself
- limit of 1 MB / s write to a shard

## Scaling

done via shard splitting or merging

## Concepts

- data records grouped in to a data stream
- data records in a stream distributed across shards

## Features

- data is immutable
- retention default is 24 hours and can go up to 1 year
- supports batching
- supports replay / reprocess
- supports multiple consumers
- records ordered per shard
