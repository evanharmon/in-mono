# AWS CLOUDWATCH UNIFIED AGENT

## Resources

- [AWS CloudWatch Unified Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/UseCloudWatchUnifiedAgent.html)
- [AWS CloudWatch Unified Agent Configuration Wizard](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-cloudwatch-agent-configuration-file-wizard.html)
- [AWS CloudWatch Unified Agent Configuration Complete Examples](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Complete-Example)
- [AWS CloudWatch Unified Agent Send to Another AWS Account](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-common-scenarios.html#CloudWatch-Agent-send-to-different-AWS-account)

## Features

- sends logs to CloudWatch Logs
- sends addional system metrics to CloudWatch
- supports centralized configuration via SSM Parameter Store

## Limitations

- cannot send logs to Kinesis

## Batch

- supports batch_count, batch_duration, batch size
