# AWS ELASTICACHE REDIS

## Resources

- [AWS Elasticache Redis User Guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html)
- [AWS Elasticache Redis Cluster Mode Explained](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.NodeGroups.html)
- [AWS Elasticache High Availability With Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.html)
- [AWS Elasticache Backups](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups.html)

## Features

- single threaded
- supports Multi AZ with auto-failover
- supports read replicas
- supports encryption

## Backup & Restore

turn on Read Only File Feature (AOF)

## Scaling / Evictions

to calc scale, take 90 and divide by # of cores
set threshold, can only scale out

## Monitoring Memory

no SwapUsage metric. Use reserved-memory