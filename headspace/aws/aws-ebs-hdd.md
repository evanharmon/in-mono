# AWS EBS HDD
for your sequential needs

## Resources

- [AWS EBS HDD Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#hard-disk-drives)
- [AWS EBS COLD HDD Volume Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_sc1)

## HDD Common Features
durability: 99.8 - 99.9%
volume size: 125 GiB - 16 TiB

## Limitations
- not supported on boot volumes
- EBS multi-attach not supported

## Thoughtput Optimized
max IOPs 500
max throughput 500 MiB/s

use cases:
- big data
- data warehouses
- log processing

## Cold HDD
max IOPs 250
max throughput 250 MiB/s

use cases:
- infrequently accessed throughput-oriented storage data
- scenarios where lowest storage cost is important