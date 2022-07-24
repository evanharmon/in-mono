# AWS EXAM TIPS KINESIS

## Kinesis

- agent cannot be configured to send to data streams AND firehose at same time

## Kinesis Data Streams

- limit of 1 MB / s write to a shard
- DynamoDB, Aurora, CloudWatch, IoT Core can send data directly Kinesis Data Streams

## Kinesis Data Firehose

- common pattern to send CloudWatch Events / Logs straight to Kinesis Data Firehose

## Kinesis Data Analytics

- sources have to be Kinesis Data Streams or Firehose
