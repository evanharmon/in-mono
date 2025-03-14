# LINUX FILESYSTEM

## Features
creates filesystem over a partition to make it usable by the OS
- defines how data is stored on disk
- filesystem is then mounted to a directory, then it is available for read / write
- `mkfs` is the tool to create filesystems

## Filesystem types

### Ext2
- max file size of 2TB
- 4TB volume size
- supports compression
- supports linux permissions
- long crash recovery

### Ext3
- max file size of 2TB
- 4TB volume size
- uses journal
- backwards compatible

can be mounted as an ext2

### Ext4
- max file size of 16TB
- 1 exabyte volume size
- uses journal
- uses chksum for journal
- backwards compatible

can be mounted as an ext3, or ext2

## Commands

### Check disk free
check disk space utilization
```bash
# all mounted filesystems
df -h
# specific filesystem
df -h /tmp
```

### Check disk usage
analyze filesystem trees and identity large files / directories
```bash
# human readable
du -h /tmp
# summary - does not list individual items
du -sh /tmp
```