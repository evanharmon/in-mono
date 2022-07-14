# AWS STORAGE GATEWAY VOLUME GATEWAY

block storage via iSCSI protocol to S3

## Resources

- [AWS Storage Gateway Volume Gateway](https://docs.aws.amazon.com/storagegateway/latest/vgw/index.html)

## Features

- backup as EBS snapshots via scheduled backups to S3

## Limitations

- files are not stored in S3 but are in EBS Snapshots
- restoring file requires mounting EBS Snapshot
- max 32 volumes per gateway

## Volume Types

- cached volumes
- stored volumes

## Cached Volumes

- only most frequently accessed data is stored locally
- cost effective, bad if internet goes down
- up to 32 TB size

# Stored Volumes

- entire Dataset is stored on-site and async backed up
- great for loss of internet connection
- can recover locally or on Amazon EC2
- up to 16 TB size
