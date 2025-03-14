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

### List directories

`ls -d */`

### List only hidden files

`ls -d .*`

### List files in human readable sizes

`-l` flag is for long form and required
`ls -ahl`

### List files in order created
`ls -lt`

### List files in reverse order created
`ls -ltr`

### Get the size of a folder

`du -sh dist`

### List directory by time stamp

`ls -lart`

### Locate a file
may have to run `sudo updatedb` to update locate database
`locate myfile.txt`