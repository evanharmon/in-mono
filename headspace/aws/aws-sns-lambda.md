# AWS SNS LAMBDA

## Resources

- [AWS SNS Using Lambda with SNS](https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html)
- [AWS SNS Tutorial Lambda and SNS Separate Accounts](https://docs.aws.amazon.com/lambda/latest/dg/with-sns-example.html)

## Features

- sns invokes Lambda async
- supports invoking cross account lambdas
- always single message delivery

## Limitations

- cross region to opt-in regions won't work
- PUSH so no batching of records to Lambda
