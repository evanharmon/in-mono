# AWS EBS PROVISIONED IOPS SSD
high performance for mission-critical, low-latency, or high-throughput workloads
EBS multi-attach supported

## Resources

- [AWS EBS Provisioned IOPS SSD](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_piops)

## io1 / io2 Use Cases

- workloads requiring sustained 16,000 IOPS
- I/O-intesive database workloads

## io2 Block Express Use Cases

- sub-millisecond latency
- sustained IOPS over 64,000
- over 1,000 MiB/s throughput

## io1 / io2 Common
use instances built on the Nitro system

Volume size: 4 GiB - 16 TiB
Max throughput per volume: 1,000 MiB/s
64,000 Provisioned IOPs gives max throughput

## io1 specific features

durability is 99.8% - 99.9%
1,280 GiB gives max IOPS

- max IOPS depends on volume size: 50:1

## io2 specific Features

durability is 99.999%
128 GiB gives max IOPS

- max IOPS depends on volume size: 500:1

## io2 Block Express Features

only available on C7g, R5b, X2idn, and X2ieden instances
io2 runs automatically in Block Express mode on these instances
lots of limitations on io2 volumes with Block Express - read the docs above

- volume size 4 GiB - 64 TiB
- durability is 99.999%
- max throughput per volume up to 4,000 MiB / s

## Limitations

- non-Nitro instances max out at 32,000 IOPS