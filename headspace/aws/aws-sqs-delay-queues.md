# AWS SQS DELAY QUEUES

## Resources

- [AWS SQS delay queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html)
- [AWS SQS message timers](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-timers.html)

## Features

- can be set at queue level or message level with `DelaySeconds`
- IMMEDIATELY hides message for period of time
- retroactive for FIFO queues

## Limitations

- NOT retroactive for standard LIFO queues
