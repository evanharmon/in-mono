# AWS SQS TROUBLESHOOTING

## Resources

- [AWS SQS Troubleshooting with XRAY](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-troubleshooting-using-x-ray.html)

## SQS Messages Arriving Slowly

- [AWS SQS Delay Seconds Docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html)

Check the delivery delay. `DelaySeconds` is probably 90 seconds instead of 0 seconds

## SQS Message Being Processed Too Many Times

- [AWS SQS Visiliby Timeout Docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)

Adjust the `VisibilityTimeout`. If the processing application / lambda takes 60
seconds to process the message, the default setting of `VisibilityTimeout: 30s`
will result in the message being processed multiple times.

## SQS ReceiveMessages API Call Taking Too Long

adjust the `waitTimeSeconds` to 1 second, so the api call will return in 1
second with any messages. 0 seconds will return messages in the queue
immediately.