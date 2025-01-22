# LINUX LVM

## Features
logical volume manager
allows grouping of multiple physical volumes / partitions in to a volume group
- volume groups can be carved out to logical volumes
- allows volume sizes to be resized dynamically (as long as sufficient space in volume group)
- filesystem doesn't have to be unmounted to take advantage of resize

## Examples
`/home`, `/var/`, `/tmp` could be on diff logical volumes for easy resizing

## Install
`apt install lvm2`

## Configuration LVM
1. find free disks / partitions
2. create physical volume object
3. create volume group
4. create logical volumes
5. create filesystem

### Physical Volume Objects (PV)
this is how lvm identifies disk or partition

### Volume group
can have one or more physical volumes

## Commands

### Create physical volume object (PV)
`pvcreate /dev/sdb`

### Get info on physical volume (PV)
list all physical volumes and associated volume groups:
`pvdisplay`

### Create volume group (VG)
just one physical volume in this group:
`vgcreate my_vg /dev/sdb`

### Get info on volume group (VG)
list all volume groups:
`vgdisplay`

### Create logical volumes
format: '<SIZE> -n <VOLUME_NAME> <VOLUME_GROUP>'
`-L` is linear volume
`lvcreate -L 1G -n vol1 my_vg`

### Get info on logical volume
`lvdisplay`

### List logical volumes
`lvs`

### Create filesystem on logical volume
`mkfs.ext4 /dev/my_vg/vol1`

### Mount the filesystem
make logical volume available for use
`mount -t ext4 /dev/my_vg/vol1 /mnt/vol1`

### Resize filesystem
check if enough space in volume group:
`vgs`

increase size by 1GB:
`lvresize -L +1G -n /dev/my_vg/vol1`

logical volume will be resized but NOT filesystem:
`df -hP /mnt/vol1`

resize filesystem now - will resize to use up volume space:
`resize2fs /dev/my_vg/vol1`

confirm filesystem now is using more space:
note logical volume is available at `/dev/my_vg/vol1` or `/dev/mapper/my_vg-vol1`
`df -hP /mnt/vol1`
