# AWS EXAM TIPS SERVICES

## VM Import / Export

- involves downtime as VMs are stopped to create OVA files

## SMS

- incremental backups so can minimize downtime on server migrations

## SNS

- PUSH model so no batching of records to Lambda

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
- max storage is 80 TB

## Data Lifecycle Manager

- useful for managing creation, retention, deletion of EBS snapshots
- supports automated cross-account EBS snapshots

## VPC

default security group has rule to allow all inbound to itself for network interfaces / instances
launch config instance tenancy overrides vpc instance tenancy

## RDS Replication

Multi-AZ: Synchronous
Replica: Asynchronous

## Aurora Replication

multi-AZ AND Replica are Asynchronous!
