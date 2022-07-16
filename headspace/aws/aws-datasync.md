# AWS DATASYNC

used to transfer data between storage systems and services
works via agent

## Resources

- [AWS Datasync Docs](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)
- [AWS Datasync Tasks](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-tasks.html)

## Features

- fully automated
- up to 10x speed of CLI tools
- uses purpose build network protocol
- includes retry and network resiliency mechanisms

## Supported Sources

- NFS
- SMB
- HDFS
- Object storage systems
- S3 buckets
- EFS
- FSx
- Snowcone devices

## Tasks Scheduling

lowest interval is 1 hour

intervals:

- hourly
- daily
- weekly
- days of week
- custom

## Use cases

- EFS to EFS replication using an EC2 instance with the Datasync agent
- On-premise to AWS S3 / EFS / FSx
