# AWS RDS AURORA

## Resources

- [AWS RDS Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)
- [AWS RDS Aurora MySQL Load Data from S3](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html)
- [AWS RDS Aurora PostgreSQL Load Data from S3](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PostgreSQL.S3Import.html)
- [AWS RDS Getting Started Serverless Aurora](https://aws.amazon.com/getting-started/hands-on/building-serverless-applications-with-amazon-aurora-serverless/#)
- [AWS RDS Aurora High Availability & Replication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html)
- [Terraform Serverless Aurora Example](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora/blob/master/main.tf)

## Supported engines

- PostgreSQL
- MySQL

## Features

- multi AZ
- multi AZ replication is synchronous
- storage grows automatically in increments of 10 GB
- max storage 128 TB
- automatically stores 6 copies across AZs
- database engine version upgrades happen across all instances at the same time
- supports database cloning

## Failover

- happens in less than 30 seconds
