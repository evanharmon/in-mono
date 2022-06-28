# AWS DIRECTORY SERVICE MANAGED MICROSOFT AD
standalone or joined to on-premise active directory service

## Resources
- [AWS Managed Microsoft AD Docs](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html)
- [Manage users and groups in AWS Managed Microsoft AD](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_manage_users_groups.html)

## Supported
- MFA
- trust relationship between AWS Managed Microsoft AD and existing on-premise AD
- EC2 Windows: domain join from multiple accounts & VPCs
- users management on AWS and on-premise

## Integrations
- automated backups
- automated multi-region replication
- RDS for SQL Server
- AWS Workspaces, Quicksight, etc
- SSO

## Requirements for On-Premise Connect
- VPN or Direct Connect

## Trust Types
- one-way trust to AWS
- one-way trust to on-premise
- two-way forest trust (replication not supported)