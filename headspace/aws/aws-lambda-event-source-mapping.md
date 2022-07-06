# AWS LAMBDA EVENT SOURCE MAPPING
polls source, batches, and invokes lambda function

## Resources

- [AWS Lambda Event Source Mapping](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html)

## Event Sources

- DynamoDB streams
- Kinesis streams
- Amazon MQ
- Amazon Managed Streaming for Apache Kafka (Amazon MSK)
- SQS

## Batching
- default batch window 0 seconds for Kinesis, Dynamodb, SQS
- default batch window 500ms for Amazon MSK and Amazon MQ

## Failures Destination
can go to SQS or SNS