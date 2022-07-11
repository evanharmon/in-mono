# AWS REDSHIFT PRICING

## Resources

- [AWS Redshift Getting Started](https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html)

## Billing

- per hour
- scales from $0.25/hr up to $1,000+ per terabyte per year
- charged for backups
- charged for data transfer within VPC
- not charged for data transfer outside of VPC

### Compute Node Hours

Charged for compute nodes only - not leader nodes
Total # of hours across all nodes
1 unit per node per hour
Ex. 3-node warehouse cluster would incur 2,160 instance hours