# LINUX FSTAB

## Features
stores mounts to survive reboots
- located at `/etc/fstab`

## File format
Fields:
- filesystem: example `/dev/sda1`
- mountpoint: directory for mounting ex: `/`
- type: `ext2`, `ext3`, `ext4`
- options: `RW` = Read-Write, `RO` = ReadOnly
- dump: `0` = ignore, `1` = take backup
- pass: `0` = ignore, `1` or `2` = FSCK filesystem check enforced

pass # value is the order in which the disk will be tested to pass validations
pass 1 is usually for root file system

## Add disk to fstab
`echo '/dev/sdb1 /mnt/ext4 ext4 rw 0 0' >> /etc/fstab`