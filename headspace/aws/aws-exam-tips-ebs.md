# AWS EXAM TIPS EBS

## Storage

- single AZ!!
- stored in S3 but NOT visible to you

## gp2

- $0.10 per GB-month

## gp2 calculations

- 3 IOPS per GiB of volume size
- 33.33 GiB and below gives min 100 IOPS
- 5,334 GiB and above gives max 16,000 IOPS
- max burst IOPS is 3,000
