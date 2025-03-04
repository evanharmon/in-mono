# LINUX DD

## Features
Copies and converts data between files or devices
- can make an exact bit-by-bit copy of a disk

## Flags

- `if`: input file
- `of`: output file
- `bs`: block size
- `count`: number of blocks to read
- `seek`: starting offset

## Best practices
Beware: `dd` is powerful and can completely overwrite files or data
- unmount a disk before making a copy
- default blocksize `bs` is small and inefficient - so bump it up!
- don't run this on a virtual machine - it'll overwrite virtual disk. :joy:

## Recipes

### Backup disk

```bash
sudo dd if=/dev/sda1 of=backups/backup_20230220 bs=1M count=100 status=progress
```

### Restore disk

```bash
sudo dd if=backups/backup_20230220 of=/dev/sda1 bs=1M count=100 status=progress
```

### Copy file

`dd if=input.txt of=output.txt bs=1M`

### Convert between formats

`sudo dd if=/dev/sdb of=my_image.img conv=notrunc`

### Test quotas
ex: 5000 soft limit, 6000 hard limit
```bash
sudo dd if=/dev/zero of=test.json bs=5000 count=5120
```
