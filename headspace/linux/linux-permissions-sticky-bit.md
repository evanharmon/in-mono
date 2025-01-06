# LINUX PERMISSIONS STICKY BIT

## Features
special permission to set on directories

- restricts file deletion in directory
- only file owner, directory owner, or superuser can delete files
- useful for shared directories to prevent modify / delete files
- uses octal prefix `1

## Commands

### Set sticky bit on a directory
`chmod +T mydirectory/` or `chmod 1666 mydirectory/`

directory will have permissions `drw-rw-rwT` - no execute

### Set sticky bit on a directory with execute
`chmod +t mydirectory/` or `chmod 1777 mydirectory/`

directory will have permissions `drwxrwxrwt`

### set sticky bit, suid, and sgid on a directory
`chmod 7755 mydir`