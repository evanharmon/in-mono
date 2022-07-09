# AWS DYNAMODB STREAMS

used to capture modifications to tables. Both modes can exist on a table

## Resources

- [AWS DynamoDB Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html)

## Features


- data retaine for 24 hours
- up to 2 simultaneous consumers per shard
- stream records retain same sequence as modifications
- pull model is GetRecords over HTTP

## Limitations

- subject to DynamoDB throughput quotas for table / region