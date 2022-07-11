# AWS LAMBDA SQS EVENT SOURCE MAPPING

## Resources

- [AWS Lambda Event Source Mapping](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html)
- [AWS Lambda with SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html)
- [AWS Lambda with SQS Configuration](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params)

## Features

- default long polls SQS
- supports both LIFO and FIFO

## Limitations

- Max batch size of 10,000 for SQS LIFO
- Max batch size of 10 for SQS FIFO

## Recommendations

- set SQS queue visibility timeout to at least 6x lambda timeout to allow retries