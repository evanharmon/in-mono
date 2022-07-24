# AWS SQS FIFO

## Resources

- [AWS SQS FIFO Queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html)
- [AWS SQS FIFO -> LAMBDA](https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/)

## Features

- use SendMessageBatch, ReceiveMessage, and DeleteMessageBatch with 10 to get 3000 tps

## Limitations

- up to 300 transactions per second!
- batch calls are max 10 messages!
