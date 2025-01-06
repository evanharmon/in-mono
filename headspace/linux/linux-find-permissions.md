# Find Command Permissions

## Features
find directories or files based on permission levels using `-perm`
## Prefixes

- no prefix means exact permissions
- `-` means at least the following permissions
- `/` means any of these permissions

## Commands

### Search for exact permissions octals
files with exactly u+rw,g+rw,o+r
`find -perm 664`
`find -perm 0664`
`find -type f -perm 0644`

### Search just for files of a specific permission and print
`sudo find /var -type f -perm 0777 -print`

### Search for exact permissions spelled out

`find -perm u=rw,g=rw,o=r`

### Search with at least these permissions octals

`find -perm -664`

find files with at LEAST user execute:
`find -perm -100`

### Search with at least these permissions
`find -perm u=rw,g=rw,o=r`

### Search for at least these permissions octals
`find -perm /664`

matches:
read/write for user and group
read only for others


### Find files with any of the matching permissions
at least one group (u/g/o) needs to match
`find -perm /664`

### Find suid files in a directory
`find -perm /4000`

### Find sgid files in a directory
`find -perm /2000`

### Find files with sgid and suid in a directory
`find -perm /6000`

## Examples

### Group has at least write permissions
`find -perm -g=w`

### User cannot read or write
`find -perm /o=rw`

### User cannot read
`find \! -perm -o=r`

### Only read for users, groups, or others
at least one should be able to read
`find -perm /u=r,g=r,o=r`

### group has at least write perms, others cannot read or write

`find -perm -g=w ! -perm /o=rw`