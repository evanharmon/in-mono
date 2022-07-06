# AWS LAMBDA

## Resources

- [AWS Lambda Asynchronous Invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)
- [AWS Lambda Asynchronous Invocation Destinations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations)
- [AWS Lambda Synchronous Invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html)

## Asynchronous

128KB payload limit, 3 retries total

- S3
- SNS
- CloudWatch Events

## Synchronous

6MB payload limit, zero retries

- CLI
- SDK
- API Gateway
- AppSync

## Destinations
only available for async invocation, can be for successful or failed events
AWS recommends destinations instead of DLQ's now

- SQS
- SNS
- Lambda
- EventBridge