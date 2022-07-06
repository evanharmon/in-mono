# AWS CONFIG EXAMPLES

## Resources
- [AWS Config notifications to SNS examples](https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html)
- [AWS Config List Of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html)
- [AWS Config Custom Rules with Lambdas](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html)
- [AWS Config Multi Account Multi Region Aggregation](https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html)
- [AWS Config enable across all accounts in organization](https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html)
- [AWS Config Logging and Monitoring](https://docs.aws.amazon.com/config/latest/developerguide/security-logging-and-monitoring.html)
- [AWS Config Remediation](https://docs.aws.amazon.com/config/latest/developerguide/remediation.html)
- [AWS Blog AWS Config remediation with SSM](https://aws.amazon.com/blogs/mt/implement-aws-config-rule-remediation-with-systems-manager-change-manager/)

## Limitations
- does not prevent any actions
- per region service

## Trigger Types
- on configuration change
- periodic


## Logging
- AWS Config API calls captured by CloudTrail as events

## Monitoring
- SQS
- SNS
- EventBridge

## Remediation
only manual remediation can be managed for non-service linked AWS Config rules