# LINUX PARTITIONS

## Features
For security and system protection!
Bad things happen when an OS runs out of disk space

## Partition types
- primary
- extended
- logical

## Partition Scheme / Table
shows how a disk is partitioned

### MBR Scheme
MBR - master boot record. 30+ years old
- can only have 4 primary partitions
- maximum size per disk is 2TB
- to get past 4 partitions, 4th has to be created as extended partition

### GPT Scheme
GUID Partition Table, the new best choice. Not limited to 2TB disk.
no max size per partition
theoretically unlimited # of partitions, limited by OS
example: RHEL only allows 128 partitions per disk

## Primary partition
can be used to boot an OS
traditionally the disk had just 4 primaries

## Extended partition
can't be used on it's own
can host logical partitions
historically, extended the # of partitions past primary 4
has a partition table that points to one or more logical partitions

## Logical partition
created within an extended partition