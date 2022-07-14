# AWS RDS DMS

## Resources

- [AWS RDS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)
- [AWS RDS DMS Best Practices]

## Features

- can still use database during migration
- supports VPC Peering, VPN, or DX
- supports snowball to save from using the network!

## Limitations

- requires creating a Replication Instance (EC2)

## Supported database sources

on-premise or EC2 instances databases

- Oracle
- SQL Server
- Azure SQL / Managed Instance
- Google Cloud MySQL
- PostgreSQL
- SAP ASE
- MongoDB
- Amazon DocumentDB
- Amazon S3
- IBM Db2 linux, Unix, Windows (LUW)
- IBM Db2 for z/OS

## Schema Migration Tool (SCT)

Uses Schema migration tool to migrate from one database tool to a different
database (ex. Oracle to Aurora). Works with functions, stored procedures,
functions, etc