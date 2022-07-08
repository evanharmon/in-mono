# AWS EC2 INSTANCE STORE
highest performance physical disks attached to physical server

## Resources

- [AWS EC2 Instance Store Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html)

## Use Case

- buffer
- cache
- tmp

## Features

- up to 7.5 TiB in size
- striped can reach 60 TiB
- can be rebooted without losing your data
- created from a template stored on S3
- can scale up to million+ IOPS
- can only be added when instance is created
- instance cannot be stopped when an instance store is used

## Limitations

- default, ROOT volumes will be deleted on termination
- cannot be increased in size
- have to do and manage own backups
- ephemeral Storage - less durability. If host fails, your instance store is lost