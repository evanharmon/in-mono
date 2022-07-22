# AWS RDS DMS

## Resources

- [AWS RDS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)
- [AWS RDS DMS Best Practices](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)

## Features

- can still use database during migration
- supports VPC Peering, VPN, or DX
- supports snowball to save from using the network!

## Limitations

- requires creating a Replication Instance (EC2)

## Schema Migration Tool (SCT)

Uses Schema migration tool to migrate from one database tool to a different
database (ex. Oracle to Aurora). Works with functions, stored procedures,
functions, etc
