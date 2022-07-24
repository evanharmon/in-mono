# AWS EXAM TIPS CLOUDWATCH

## Accounts

- cloudwatch logs cannot forward events directly to CloudWatch logs in another account (use subscriptions)

## CloudWatch Logs Agent

- watch out as the recommended agent is now the unified CloudWatch Agent
- CANNOT publish data to Kinesis Data Firehose

## Unified CloudWatch Agent

- agent doesn't publish to Kinesis

## Subscriptions

- CloudWatch Logs / subscriptions handles publishing to Kinesis
