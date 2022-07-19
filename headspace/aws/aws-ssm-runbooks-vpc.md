# AWS SSM RUN COMMAND

## Resources

- [AWS SSM Runbooks Amazon VPC](https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-ref-vpc.html)

## Check for packet loss and visualize latency

use runbook `AWSSupport-SetupIPMonitoringFromVPC` which creates EC2 instances
in a specific subnet to monitor selected target IPs and store in CloudWatch Logs
