# AWS ELASTIC BLOCK STORAGE SNAPSHOTS

## Resources

- [AWS EBS Fast Snapshot Restore](https://aws.amazon.com/blogs/aws/new-amazon-ebs-fast-snapshot-restore-fsr/)

## Features

- incremental, only blocks that have changed since last snapshot
- cannot share encrypted snapshots
- block-level, stored on S3, incremental
- first one can take a while, subsequent snapshots will likely be quicker
- may contain deleted files with sensitive data
- copy to new EBS volume to be sure deleted files are not included
- encrypted volumes are automatically encrypted snapshots, restores from

## Limitations

- snapshots DO consume IO! (duh)

## Sharing EBS snapshots

Can be shared publically on a read-only permission level
can only share unencrypted

## Root Volume Snapshots

Taking a snapshot automatically stops the volume - beware on production!

## Snapshot Of RAID Array

Problem: take a snapshot, excludes data held in cache by applications and OS. Across multiple volumes in RAID array, this can be problematic due to interdependencies of the array

Solution: Stop application from writing to disk, flush all caches to the disk
Freeze file system
Unmount the RAID Array
Shutting down the associated EC2 instance
