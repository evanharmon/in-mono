# LINUX FILES AND FOLDERS

## File type identifiers
what you see in `ls -l`
directory           `d`
regular file        `-`
character device    `c`
link                `l`
socket file         `s`
pipe                `p`
block device        `b`

## Commands

### See folder tree 2 levels deep

`tree -L 2`

### List directories

`ls -d */`

### List only hidden files

`ls -d .*`

### List files in human readable sizes

`-l` flag is for long form and required
`ls -ahl`

### Get the size of a folder

`du -sh dist`

### List directory by time stamp

`ls -lart`

### View end of a file

`tail log.txt`
