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

third, get job output

```console
aws glacier get-job-output \
  --account-id=$AWS_ACCOUNT_ID \
  --job-id="xDz3o8fk0xDr1d5hkbgX1rYaaD-HiUMXWh4tMD1VwUJKb7BjfFPf2GILEKrsCEPPzJNMZ--hAmmbR6FS3CI1vQM0q48q" \
  --vault-name="eph-music.education.dmp" outfile.json
```

fourth, get archiveId's from json output file and delete each archive in the vault

```console
aws glacier delete-archive \
  --account-id=$AWS_ACCOUNT_ID \
  --archive-id="4n--r9_juUZHFlTLfarGcrkUD8qyVrWI-ZgGrZjdCZrQsl31Qrwf2vcGzFa78NQ-O6kYUzcNDrSP0JQTAuefkqTgqUSnuUl-A8HAJlFj5BsTwuSasRzOkKPHr47aGg9YqRNgMO9zcQ" \
  --vault-name="eph-music.education.dmp"
```