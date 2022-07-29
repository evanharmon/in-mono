# AWS RDS DMS

## Resources

- [AWS RDS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)
- [AWS RDS DMS Best Practices](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)

## Features

- can still use database during migration
- supports VPC Peering, VPN, or DX
- supports snowball to save from using the network!
- uses SSL and KMS

## Limitations

- requires creating a Replication Instance (EC2) via DMS console / API

## Caveats

shared responsibility is shared and IAM roles / permissions to access DMS are up to admins

## Steps

- use DMS console to create EC2 replication instance
- adjust redshift SG to allow subnet range / ip of instance
- create source endpoint and target db endpoint
- create task
