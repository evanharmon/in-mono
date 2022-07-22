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

## SNS

- PUSH model so no batching of records to Lambda

## SQS

- use visibility timeout to reduce chance of picking up twice
- use `ChangeMessageVisibility` on a message with a heartbeat process to prevent re-pick up
- visibility timeout hides message AFTER pickup
- delay queues IMMEDIATELY hides message for period of time

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

## Data Lifecycle Manager

- useful for managing creation, retention, deletion of EBS snapshots
- supports automated cross-account EBS snapshots

## EBS

- stored in S3 but NOT visible to you

## SnowBall Edge

- max storage is 80 TB

## Database Migration Service

- have to manage an EC2 instance for replication!!
