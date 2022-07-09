# AWS RDS READ REPLICAS

## Resources
- [AWS RDS Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)

## Features

- async replication
- replica gets its own DNS endpoint
- instance size can be different from original
- can be promoted to be their own databases, breaking the replication

## Limitations
- up 5 Read Replicas of any databases
- you can have replicas of replicas but they can incur extra latency
- CANNOT take snapshots or automated backups of read replicas

## Requirements
- automatic backups must be turned on
- can only be multi-az if the source database is set for Multi-AZ

## Creation
AZ can be different than current AZ

## Data Transfer On Creation
Free!

## Regions
Read replica in a second region for MySQL and MariaDB
