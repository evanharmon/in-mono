# AWS EC2 AMIS
Acts as template for the root volume

## Features
- can be copied between Regions
- newly created AMIs default to private
- can be instance-store or EBS backed
- can be shared privately with specific AWS Account Numbers

## Limitations
- AMIs are Regional
- can only launch in to region from which it is stored

## Security
AMIs contain Launch Permissions that control which AWS accounts can use the AMI
to launch instances

## Steps to Create an AMI
- Take a snapshot which is saved to S3
- Create Image from EBS Snapshot

## Find CentOS AMI
- [Centos AWS](https://wiki.centos.org/Cloud/AWS)

```console
aws ec2 describe-images \
  --owners 'aws-marketplace' \
  --filters 'Name=product-code,Values=aw0evgkw8e5c1q413zgy5pjce' \
  --query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
  --output 'text'
```
