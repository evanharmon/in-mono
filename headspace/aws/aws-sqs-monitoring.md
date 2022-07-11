# AWS SQS MONITORING

## Resources

- [AWS SQS Monitoring](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch.html)
- [AWS SQS Cloudwatch Alarm Suggestions](https://www.bluematador.com/blog/how-to-monitor-amazon-sqs-with-cloudwatch)

## CloudWatch Metrics

Monitor `NumberOfMessagesSent` to determine if producer of messages has stopped
working.

Monitor `ApproximateAgeOfOldestMessage` to determine if messages are not being
processed quickly enough.