# LINUX PERMISSIONS SGID

## Features
applies to both executables and directories

- generated files retain same group
- useful for shared directories and maintaining ownership in shared directory
- uses octal prefix `2`
- can be combined with suid by using startig octal `6`

## Commands

### Set sgid for a file
`chmod 2664 myfile`

file will have permissions `-rw-rwS-r--`
capital `S` means no executable permissions

### Set sgid execute for a file
`chmod 2674 myfile`

file will have permissions `-rw-rws-r--`
lowercase `s` means executable permissions