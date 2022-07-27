# AWS EFS SECURITY

## Resources

- [AWS EFS Security](https://docs.aws.amazon.com/efs/latest/ug/security-considerations.html)
- [AWS EFS Data Encryption](https://docs.aws.amazon.com/efs/latest/ug/encryption.html)
- [AWS IAM for EFS](https://docs.aws.amazon.com/efs/latest/ug/auth-and-access-control.html)
- [AWS Managed Policies for EFS](https://docs.aws.amazon.com/efs/latest/ug/security-iam-awsmanpol.html)
- [AWS EFS File System Policies](https://docs.aws.amazon.com/efs/latest/ug/create-file-system-policy.html)
- [AWS EFS Security Groups](https://docs.aws.amazon.com/efs/latest/ug/accessing-fs-create-security-groups.html)

## Encryption at rest

uses KMS. NOT enabled by default

- can only be enabled when creating EFS
- can be enforced in IAM policy
- limited to symmetric key when using KMS customer managed key

## Encryption in transit

use the EFS mount helper and make sure to install and upgrade the stunnel program is installed on instance

- can be enabled on mount
