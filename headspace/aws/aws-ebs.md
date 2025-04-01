# AWS ELASTIC BLOCK STORAGE

## Resources

- [AWS Elastic Block Store EBS Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
- [AWS EBS Recycle Bin](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html)
- [AWS EBS Initialize](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-initialize.html)
- [AWS EBS Volume Monitoring](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html)
- [AWS EBS Calculate IOPs used](https://onica.com/blog/managed-services/calculate-aws-ebs-volume-iops/)

## Features
- stored in multiple physical locations at no addt'l charge
- can be resized up without un-attaching
- can be resized down if un-attached

## Pricing

pay per GB provisioned

## Limitations

- specific to single AZ

## EBS Databases

EBS complex transactional databases should be backed up using the database
management system so distributed transactions/logs can be checkpointed

## Backups

AWS does not perform any backups - customer must do this

## Init State

raw, unformatted block devices
you can create file system on top of EBS volume

## Wipe

DoD 5220.22-M or NIST 800-88 wipe methods available

## Encryption

- Encrypts on server that hosts EC2 instance, so data encrypted in transit from
  EC2 instance to EBS storage
- Only available on M,C,R,G EC2 instance types

## Best Practices

- encrypt EBS volumes and snapshots with AES-256
- take snapshots regularly since EBS limited to specific zones
- EBS volumes that serve as root, you should stop the instance before taking the
  snapshot. (Make sure EC2 won't terminate on stop)
