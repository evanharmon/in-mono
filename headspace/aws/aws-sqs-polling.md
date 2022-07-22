# AWS SQS POLLING

## Resources

- [AWS SQS Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html)

## Polling Methods

`WaitTimeSeconds` settings between 1 and 20 takes priority over
`ReceiveMessageWaitTimeSeconds` settings

#### Short Polling

Only queries subset of servers

Settings:
Receive Message call with `waitTimeSeconds` set to `0`
Receive Message call with `ReceiveMessageWaitTimeSeconds` set to 0

#### Long Polling

queries all servers

helps reduce costs
eliminates false empty responses
Set ReceiveMessageWaitTime to betweeen 1 and 20 seconds
