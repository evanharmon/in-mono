# AWS CLOUDFORMATION RESOURCE ATTRIBUTES

## Resources

- [AWS CloudFormation Resource Attributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-attribute-reference.html)

## CreationPolicy

supports receiving success signals from EC2 instances, etc before setting
completion state for CloudFormation

supported resources:

- AppStream Fleet
- Auto Scaling Group
- EC2 instance
- WaitCondition

## UpdatePolicy

supports receiving success signals from EC2 instances, etc before setting
completion state for CloudFormation

supported resources:

- AppStream Fleet
- Auto Scaling Group
- ElastiCache Domain
- ElastiCache Replication Group
- Lambda Alias
- OpenSearchService Domain

#### Auto Scaling Groups

hooks in to managing new launch configuration and use to update underlying instances

## DeletionPolicy

`DeletionPolicy: Retain` use to retain resources on CloudFormation template delete
works on resources / stacks

`DeletionPolicy: Snapshot` works for resources that support snapshots