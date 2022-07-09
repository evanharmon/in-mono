# AWS DYNAMODB KINESIS DATA STREAMS

used to capture modifications to tables. Both modes can exist on a table

## Resources

- [AWS DynamoDB Kinesis Data Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html)
- [AWS DynamoDB Stream Modes Compared](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/streamsmain.html)
- [AWS Kinesis Data Streams Enhanced Fan-Out](https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html)

## Features

- data retained for up to 1 year
- up to 5 simultaneous consumers per shard
- up to 20 simultaneous consumers per shard with enhanced fan out
- no throughput quotas
- timestamp attribute on stream record can be used to determine ordering
- pull model can be GetRecords over HTTP
- push supported with enhanced fan out over HTTP/2 using SubscribeToShard