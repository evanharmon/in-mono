# AWS RDS SNAPSHOTS

user initiated manual backups that survive after RDS deletion

## Resources

- [AWS RDS Creating a DB Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html)

## Features

- manual snapshots do not expire

## Limitations

- manual snaphots can be shared with up to 20 aws accounts
- encryped snapshots CANNOT be shared if created with default KMS key of AWS Account

## Recommendations

long-term backups should be exported to S3
