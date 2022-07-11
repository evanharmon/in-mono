# AWS REDSHIFT SNAPSHOTS

snapshots similar to RDS

## Resources

- [AWS Redshift Snapshots](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html)

## Special Feature

- can be configured to auto copy snapshots to another region (automated or manual)

## Features

- snapshots are incremental and stored in S3
- automated snapshots options: every 8 hours, every 5 GB, or on schedule
- max retention is 30 days
- manual snapshots are retained after Redshift deletion

## Limitations

- automated snapshots delete upon Redshift deletion
- cannot restore old cluster from snapshot
- snapshots restore in to a new cluster
