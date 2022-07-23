# AWS REDSHIFT SNAPSHOTS CROSS REGION

## Resources

- [AWS Redshift Copy snapshots to another region](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html#cross-region-snapshot-copy)
- [AWS Redshift KMS-encrypted snapshots to another region](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant)

## Steps (no KMS)

- enable `automatically copy snapshots to another region` on source region / cluster
- choose destination region
- specify source snapshot retention period
- specify destination snapshot retention period

## KMS Encrypted Steps

- create grant in destination Region to use customer managed key
- enable copying of snapshots in Redshift and choose grant

## Limitations

- can only choose one destination region
- if using KMS for root key, cannot rename cluster without turning off copy snapshots to another region
