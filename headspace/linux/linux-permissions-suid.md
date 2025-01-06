# LINUX PERMISSIONS SUID

## Features
applies to executables

- allow users to run executable with permissions of executable's owner
- still limits other user's access to directory
- executable will then be able to use owner's permissions
- uses octal prefix `4`
- can be combined with suid by using startig octal `6`

## Commands

### Set suid for a file
`chmod 4664 myfile`

file will have permissions `-rwSrw-r--`
capital `S` means no executable permissions

### Set suid execute for a file
gives user owner executable permissions and sets suid bit
`chmod 4764 myfile`

fill will have permissions `-rws-rw-r--`
lowercase `s` means executable permissions
