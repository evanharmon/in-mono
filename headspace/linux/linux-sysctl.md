# LINUX SYSCTL

## Features
used to read and modify kernel settings and attributes

## Commands

### Get total amount of memory in bytes
```bash
sysctl hw.memsize
# set to a variable in GB
MEM_GB=$(( $(sysctl hw.memsize | cut -d ' ' -f 2) / 1073741824))
# or just echo the calculation with `bc` and a herestring
echo $(bc <<< "scale=0; $(sysctl hw.memsize | cut -d ' ' -f 2) / 1073741824")
```

## Apply updates without a reboot
`sysctl --system`