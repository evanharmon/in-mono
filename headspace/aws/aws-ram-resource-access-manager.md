# AWS RESOURCE ACCESS MANAGER

## Resources

- [AWS Resource Access Manager Docs](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)
- [AWS RAM Shareable Resource](https://docs.aws.amazon.com/ram/latest/userguide/shareable.html)

## Features

- securely share AWS resources from one account to other accounts

## Limitations

- cannot share security groups or default VPC
- VPC subnet sharing limited to accounts within same organization
- only ACM Private Certs can be shared

## Benefits

RAM has benefits beyond the alternative strategy of attaching a resource-based
permission policy on AWS resources

- no need to enumerate account IDs
- viewable by users in the AWS console (like native resources)
- AWS RAM initiates an invitation process when sharing to an account outside the organization

## VPC Sharing

helps to avoid the need to do VPC Peering. Security groups can be referenced from other accounts
