## LINUX GDISK

## Features
can create partitions
- use `?` to print out options in prompt
- default GUID / hex code is `8300` for linux

## Install
`apt install gdisk`

## List disks with info
`gdisk -l`

## Run gdisk with prompts
`gdisk /dev/sdb`

### Create partition
type `n`. Then answer prompts

example: 512M partition 1
```
Partition number: `1`
First sector: `2048`
Last sector: `+500M`
```

### Write partition table
type `w`. would create a partition like `/dev/sdb1`