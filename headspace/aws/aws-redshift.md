# AWS REDSHIFT

based on PostgreSQL but is OLAP analytics and data warehousing

## Resources

- [AWS Redshift Getting Started](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)
- [AWS Redshift Database Developer Guide](https://docs.aws.amazon.com/redshift/latest/dg/welcome.html)
- [AWS Redshift Pricing](https://aws.amazon.com/redshift/pricing/)

## Features

- massively Parallel Processing (MPP) - automatically distributes data/query
loads across all nodes
- easy to add nodes
- RedShift chooses compression scheme based on sampling of data
- can scale to PBs of data
- columnar storage
- integrates with AWS Quicksight or Tableau
- up to 16 TB of storage space per node

## Limitations

- only available in 1 AZ NOT multi AZ
- block Size 1MB (1024KB)
- requires provisioning - use Athena for transient needs
