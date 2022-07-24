# AWS RDS DATABASE UPGRADES

## Resources

- [AWS RDS Upgrading a DB Instance Engine Version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html)

## Features

- upgrades happen on primary and standby instances at the same time
- RDS takes a before and after snapshot

## Limitations

- downgrade not supported, must launch new RDS instance from old snapshot
- incur downtime
- read replicas MUST be upgraded first

## Steps
