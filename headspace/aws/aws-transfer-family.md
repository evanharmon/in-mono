# AWS TRANSFER FAMILY

secure transfer family to transfer files in and out of AWS storage services
think FTP

## Resources

- [AWS Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html)
- [AWS Transfer Family Pricing](https://aws.amazon.com/aws-transfer-family/pricing/)
- [AWS Transfer Family User Management](https://docs.aws.amazon.com/transfer/latest/userguide/create-user.html)
- [AWS Transfer Family Service Endpoints](https://docs.aws.amazon.com/general/latest/gr/transfer-service.html)

## Supported AWS Storage Services

S3 and EFS using NFS

## Supported Protocols

- Secure Shell File Transfer Protocol (SFTP)
- File Transfer Protocol Secure (FTPS)
- File Transfer Protocol (FTP) (only via internal within VPC)

## Pricing

- per endpoint per hour
- per GB transferred

## Users

- supports AWS Directory Service for AD
- custom identity provider
- other provides like OKTA, LDAP, Amazon Cognito

## Endpoint Options

- Public Endpoint
- VPC with VPN or DX
- VPC with EIP (but you have to manage SGs and NACLs, etc)