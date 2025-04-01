# AWS EC2 INSTANCE STORE
highest performance physical disks attached to physical server

## Resources

- [AWS EC2 Instance Store Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html)
- [AWS EC2 SSD instance store volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html)

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

## NVMe SSDs
nvme's are available for low latency / high I/O
- much faster read / writes than older SSDs

instance types that support them: (as of this writing)
- I3
- R6id
- M7i
- M7gd
