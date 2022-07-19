# AWS EXAM TIPS SERVICES

## IAM

- PowerUserAccess = AdministrativeAcess - IAM
- least privilege means NO admin access policy

## Cross Account Roles

- remember that the CROSS account creates the role and trusts the other account
- NO aws account can create a role in its own IAM to control another AWS account
- answers should not just mention the role but say something about ASSUMING role

## VM Import / Export

- involves downtime as VMs are stopped to create OVA files

## SMS

- incremental backups so can minimize downtime on server migrations

## Kinesis

- agent cannot be configured to send to data streams AND firehose at same time

## Kinesis Data Streams

- limit of 1 MB / s write to a shard

## Lambda

- use reserved concurrency limit processing speed

## Storage Gateway Volumes

- uses EBS snapshots!

## OpsWorks

- cannot be used for automating patching!

## Transfer Family

- only supports S3

## Service Control Policies

- affect the root user
- DO NOT affect service-linked roles

## Snowball Edge

- for bandwidth contrained offline data transfers
- does not support automated / accelerated online data transfers bc not the use case
