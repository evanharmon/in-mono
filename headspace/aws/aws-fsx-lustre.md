# AWS FSx

fully managed service to use other high-performance file systems in the cloud

## Resources

- [AWS FSx Lustre](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html)
- [AWS FSx Lustre Deployment Options](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types)

## Use Cases

- alternative to S3 and EFS
- ability to use non-POSIX system

## Features

used for machine learning and high performance computing (HCL)

- scales to 100s GB / s
- millions of IOPS
- sub 1 ms latencies
- supports SSD or HDD
- integrates S3 and can read / write as if its the filesystem
- can be used on-premise via DX or VPN

## Security

- encryption of data at rest is automatically enabled

## Scratch File System Deployment

highest burst performance for short-term processing

- NO data replication
- file servers are not replaced on failure

## Persistent File Systems

longer-term storage and workloads

- highly available file servers
- data automatically replicated within same AZ
- on failure, files replaced within minutes