# AWS REDSHIFT SNAPSHOTS

snapshots similar to RDS

## Resources

- [AWS Redshift Snapshots](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html)
- [AWS Redshift Copy snapshots to another region](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html#cross-region-snapshot-copy)

## Features

- snapshots are incremental and stored in S3
- can be configured to auto copy snapshots to another region (automated or manual)
- automated snapshots options: every 8 hours, every 5 GB, or on schedule
- max retention is 30 days
- manual snapshots are retained after Redshift deletion

## Limitations

- automated snapshots delete upon Redshift deletion
- cannot restore old cluster from snapshot
- snapshots restore in to a new cluster
