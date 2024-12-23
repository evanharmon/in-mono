# LINUX INDEX NODES (INODE)

## Features
data structure representing a file and metadata about the file.

data components:
- file type
- Inode number
- file permissions
- ownership / group information
- timestamps
- file size
- block pointers

## Storage
Inodes are stored in separate area of file system.

## File creation
OS allocates inode
inode is initialized with default values

## Check available inode count
`df -i`