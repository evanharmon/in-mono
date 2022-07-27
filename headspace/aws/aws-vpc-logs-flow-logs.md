# AWS VPC LOGS FLOW LOGS

## Resources

- [AWS VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
- [AWS VPC Flow Logs Basics](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-basics)
- [AWS VPC Flow Logs Examples](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html)
- [AWS VPC Flow Logs Publish to CloudWatch](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html)
- [AWS VPC Flow Logs Publish to S3](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html)
- [AWS VPC Flow Logs Query S3 Logs with Athena](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-athena.html)

## Features

- turned off by default
- supports publish to S3
- supports publish to CloudWatch Logs
- can query with Athena when published to S3
- deleting flow in VPC / EC2 does not delete the records in S3 / CloudWatch

## Limitations

- cannot be used to check packet loss
- logs are NOT real-time

## Supported Levels

can specify logs for the below levels:

- VPC
- Subnet
- ENI

## Supported Network Interfaces

flow log for a network interface is done on EC2 console / aws CLI

- ELB
- RDS
- ElastiCache
- Redshift
- WorkSpaces
- NAT gateways
- Transit gateways

## Filters

supported filtering options:

- Accepted
- Rejected
- All
