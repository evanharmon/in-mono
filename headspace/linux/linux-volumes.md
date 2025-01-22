# LINUX VOLUMES

## Create filesystem from partition and mount

### Check for filesystem / data
`file -s /dev/xvdf`
will show just `data` if no filesystem created

### Format
`mkfs -t ext4 /dev/xvdf`
or
`mkfs.ext4 /dev/sdb1`

### Mount to a folder
```bash
# make directory if necessary
mkdir /mnt/ext4;
mount /dev/sdb1 /mnt/ext4
```
confirm mounting:
`mount` or `df -hP`

### Unmount
`unmount /dev/sdb1`

### Persist after reboot
add to `/etc/fstab` file