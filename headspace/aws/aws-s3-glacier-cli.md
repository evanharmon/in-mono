# AWS S3 GLACIER CLI

## Resources
- [AWS Glacier CLI Docs](https://docs.aws.amazon.com/cli/latest/reference/glacier/index.html#cli-aws-glacier)

## Empty and Delete Vault
first, initiate inventory job

```console
aws glacier initiate-job \
  --account-id=$AWS_ACCOUNT_ID \
  --vault-name="eph-music.education.dmp" \
  --job-parameters '{"Type": "inventory-retrieval"}'
```

result shape looks like:
```json
{
    "location": "/111111111111/vaults/eph-music.education.dmp/jobs/xxxxxxxxxxxxxxxxxxxxxxxxxx-iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii--qqqqqqqqqqqqqqqqqqqqq",
    "jobId": "xDz3o8fk0xDr1d5hkbgX1rYaaD-HiUMXWh4tMD1VwUJKb7BjfFPf2GILEKrsCEPPzJNMZ--hAmmbR6FS3CI1vQM0q48q"
}
```

second, check for job to complete, may take a while

```console
aws glacier describe-job \
  --account-id=$AWS_ACCOUNT_ID \
  --job-id="xDz3o8fk0xDr1d5hkbgX1rYaaD-HiUMXWh4tMD1VwUJKb7BjfFPf2GILEKrsCEPPzJNMZ--hAmmbR6FS3CI1vQM0q48q" \
  --vault-name="eph-music.education.dmp" 
```