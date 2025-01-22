# Linux PCI Hardware

## Features
`pci` stands for peripheral component interconnect
- `lspci` list pci devices
- `lsblk` lists block devices
- `lscpu` lists cpu info
- `lsmem` list memory
- `lshw` list hardware config

## Common device major numbers
- `1` RAM
- `3` hard disk / CD-ROM
- `6` parallel printers
- `8` scsi disk

## lspci

### List PCI hardware
shows bus speed as well
`lspci`

### View Verbose
`lspci -vvv`

## lsblk
`lsblk`
outputs:
`MAJ:MIN`
`MAJ` shows block sdisk device
`MIN` differentiates amongst devices that are similar and share major #

### list type disk
`lsblk -dt`

## lscpu

### Get basic cpu info
`lscpu`

## lsmem

### Get info of memory
```bash
lsmem --summary
# or
lsmem
# or
free -m # for MB
free -k # for KB
free -g # For GB
```

## lshw

### Get detailed info on hardware
`sudo lshw`