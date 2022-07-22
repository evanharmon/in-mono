# AWS SQS VISIBILITY TIMEOUT

## Resources

- [AWS SQS visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)

## Features

- can be set at queue level or message level with `ChangeMessageVisibility`
- default is 30 seconds
- triggered when message is picked up
- prevents other consumers picking up the message for a period of time

## Limitations

- min 0 seconds
- max 12 hours

## ChangeMessageVisibility

- can be set on message level with a heartbeat by consumer process
