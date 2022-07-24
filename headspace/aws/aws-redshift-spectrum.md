# AWS REDSHIFT SPECTRUM

query data in S3 without loading

## Resources

- [AWS Redshift Getting Started](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html)
- [AWS Redshift Spectrum with enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/spectrum-enhanced-vpc.html)

## Features

- supports S3 access point alias
- data does not have to be loaded in to Redshift tables
- resides on RedShift servers independent of your cluster

## Limitations

- must already have a redshift cluster available for query
- no support for update operations on external tables
