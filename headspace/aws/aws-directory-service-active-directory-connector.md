# AWS DIRECTORY SERVICE AD CONNECTOR
used to redirect directory requests to on-premise AD. No information is cached in
the cloud

## Resources
- [AWS Directory Service AD Connector Docs](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html)

## Requirements
- VPN or Direct Connect

## Limitations
- cannot be shared with other AWS Accounts
- not multi-VPC aware
- 1-to-1 relationship between on-premise domains and an AD connector
- no caching
- users manage solely on-premise

## Unsupported
- AD transitive trusts
- SQL Server for seamless joining, etc