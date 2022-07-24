# AWS RDS AURORA GLOBAL DATABASES

AWS recommends using global databases instead of cross region read replicas

## Resources

- [AWS RDS Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html)
- [AWS RDS Aurora Global Databases Failover](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html)

## Features

one region is selected as primary

- sub-second data access in any region
- replication lag less than 1 second
- up to 5 secondary regions with read-only replicas
- up to 16 read replicas per secondary region

## Limitations

- RDS Proxy NOT supported

## Failover

still a manual promotion process
