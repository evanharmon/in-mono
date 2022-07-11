# AWS CLOUDWATCH EVENTS

preferred way to manage events is now EventBridge

## Resources

- [AWS CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)

## Features

- supports sending to Lambda, Batch, ECS Task, etc
- supports direct integrations with targets like SQS, SNS, Kinesis Data Streams, Kinesis Data Firehose
- supports sending to SSM and EC2 Actions

## Limitations

- important to enable CloudTrail integration to catch any API call

# Events

respond to state changes in AWS resources
- trigger actions / notifications