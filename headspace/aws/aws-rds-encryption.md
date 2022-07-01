# AWS RDS ENCRYPTION

## Resources
- [AWS RDS Encryption Docs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html)
- [Enable Transparent Data Encryption on RDS Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.Options.AdvSecurity.html)
- [Enable Transparent Data Encryption on RDS SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.TDE.html)

## KMS
KMS encryption available at rest for EBS volumes and snapshots

## 
## DB's supporting encryption on AWS
MySQL
Oracle
SQL Server
PostgreSQL
MariaDB

## Existing DB
cannot encrypt an existing DB - have to create a new DB instance and then migrate data into it

## Snapshots
un-encrypted RDS snapshot can be copied into an encrypted one