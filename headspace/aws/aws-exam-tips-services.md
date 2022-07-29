# AWS EXAM TIPS SERVICES

## VM Import / Export

- involves downtime as VMs are stopped to create OVA files

## Server Migration Service (SMS) now under Application Migration Service

- incremental backups so can minimize downtime on server migrations

## Storage Gateway Volumes

- uses EBS snapshots!

## OpsWorks

- cannot be used for automating patching!
- Replatform strategy

## Transfer Family

- only supports S3

## Service Control Policies

- affect the root user
- DO NOT affect service-linked roles

## Snowball Edge

- for bandwidth contrained offline data transfers
- does not support automated / accelerated online data transfers bc not the use case
- max storage is 80 TB
- good for TB to Petabytes (PB) of data

## Snowmobile

- EXABYTES of data

## Data Lifecycle Manager

- useful for managing creation, retention, deletion of EBS snapshots
- supports automated cross-account EBS snapshots

## Redshift

- You select node(s) and Redshift manages the underlying EC2 instances!
- scaling is managed for you
- faster at complex queries compared to Athena

## CodeDeploy

- pre and post traffic test functions help detect problems before deployment is completed

## EFS

- can be mounted to on-premise over DX or VPN
- cost is $0.30 per GB-month
- great for static data across multi - AZ as immediately available

## Direct Connect (DX)

- if encryption needed, use DX Plus VPN to get IPSec
- for PCI-DSS - NO PUBLIC INTERFACES

## Global Accelerator

- avoids DNS caching issues

## ACM

- ACM manages private key, so no exporting an ACM cert for use on EC2 instances

## CloudTrail

- use log file integrity validation for extra security
- use S3 MFA delete bucket policy for additional security
- DO NOT use bucket versioning as this would allow / encourage log file changes

## Gateway Load Balancers

only used to deploy virtual appliances!!!

## CloudFormation

- StackSets are for deploying to multiple regions / accounts!

## NAT Gateway

- provides static IP address (duh)

## MQ

remember it is NOT serverless

## Inspector

good for scanning for open ports / specific ports on instances
