# AWS STORAGE GATEWAY S3 FILE GATEWAY

on-premise file system mount on Amazon S3

## Resources

- [AWS Storage Gateway S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/what-is-file-s3.html)
- [AWS Storage Gateway S3 File Gateway Getting Started](https://docs.aws.amazon.com/filegateway/latest/files3/setting-up.html)
- [AWS Storage Gateway S3 File Gateway Managing Access](https://docs.aws.amazon.com/filegateway/latest/files3/managing-access-overview.html)

## Features

- supports NFS and SMB protocols
- supports KMS
- on-premise can interact with file share and file gateway interacts with S3
- supports caching
- supports S3 features like lifecycle policies, events, cross-region replication, etc

## Limitations

- must have IAM role or IAM user permissions
- cache isn't updated when uploading directly to S3!
- use `RefreshCache` if files are uploaded directly to S3 and file gateway is out of sync

## Requirements

- Microsoft Active Directory (AD)
- minimum 100 Mbps networking bandwidth
- VPC connection via DX or VPN
- gateway must be able to resolve name of Active Directory Domain Controller
