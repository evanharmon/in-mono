# AWS ELASTIC FILE SYSTEM (EFS)

## Resources

- [AWS Elastic File System EFS Docs](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)
- [AWS EFS Blog Best Practices Docker](https://aws.amazon.com/blogs/storage/best-practices-for-using-amazon-efs-for-container-storage/)
- [AWS EFS Blog Automate](https://aws.amazon.com/blogs/storage/automate-mounting-amazon-efs-file-systems-from-the-ec2-launch-instance-wizard/)

## Features

- POSIX compliant
- multi-AZ support
- support for VPC Peering
- supports on-premise over Direct Connect (DX) or VPN
- supports NFSv4
- pay only for storage you use - no pre-provisioning required
- can scale up to petabytes
- supports thousands of concurrent NFS connections
- read after write consistency
- file locking

## Targets

- EC2
- ECS
- EKS
- Fargate
- Lambda

## Pricing

pay per GB used
about 3x the cost of gp2

## Use Case

file server - apply both file level and directory level permissions

## Port

open up port 2049

## Mounting

VPC: can use dns to mount to EC2
On-premise: must use IPv4 of the ENI

## Security

uses security group to control access

## Limitations

- requires linux based AMI using NFS, POSIX compliant
- can only be attached to one VPC
- uses one ENI per AZ
