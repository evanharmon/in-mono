# AWS EBS GENERAL PURPOSE SSD
balances price and performance, recommended for most workloads

## Resources

- [AWS EBS SSD](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#solid-state-drives)
- [AWS EBS gp3](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#gp3-ebs-volume-type)
- [AWS EBS gp2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_gp2)

## Use Cases

- transactional workloads
- virtual desktops
- medium-sized, single-instance databases
- low-latency interactive apps
- boot volumes
- development and test environments

## Features

Durability: 99.8% - 99.9%
Volume size: 1 GiB - 16 TiB
Max throughput per volume: 1,000 MiB/s (gp3) or 250 MiB/s (gp2)

## gp3 specific features

32 GiB gives max IOPS and throughput

- consistent baseline 3,000 IOPS and 125 MiB/s
- can prevision additional IOPS up to 16,000 max and throughput to 1,000MiB/s max
- max IOPS depends on volume size: 500 IOPs per GiB
- max throughput to provisioned IOPS is .25 MiB/s per IOPS

## gp2 specific features

33.33 GiB and below gives min 100 IOPS
5,334 GiB and above gives max 16,000 IOPS

- can burst up to 3,000 IOPs

## Limitations

- EBS multi-attach not supported
- gp2 max throughput dependent on volume size and burst credits