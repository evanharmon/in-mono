# LINUX BOOT

## Sequence
1. BIOS Post (power on self test)
2. Boot LOADER (GRUB2)
3. Kernel Initialization
4. INIT Process (systemd)

### BIOS Post
tests and make sure components are functioning correctly

### Boot loader
load boot code from boot device, sector 1 of hard-disk
located in `/boot` filesystem
loads kernel in to memory, supplies it with params, and hands over control to kernel
example boot loader: GRUB2 (grand unified boot loader v2)

### Kernel initialization
de-compress kernel components
kernel starts executing
initializes hardware, memory, etc.
then looks for INIT process

### INIT process
sets up the user space and neede processes
then calls systemd daemon
systemd is resposible:
- for bringing host to a usable state
- mounting file systems
- starting / managing system services

check init process in use: `ls -l /sbin/init`
should point to systemd