# LINUX HARD LINKS

## Features
- link file is a pointer to an Inode
- deleting a link only deletes pointer / link count on original file
- actual deletion (unused marking) of a file only happens once zero links exist
- permissions exist on Inode and are shared. only have to change once

## Limitations
- only works for files, not directories
- files must exist on same filesystem
- requires write permissions at destination path
- should make sure all necessary users have access to file

## Create hard link
`ln original_file.txt hard_link.txt`

## Check links to file
`stat -x myfile.txt`

## Check if link is a hard link
file type will have no special indicator `-rw-r--r--` (won't start with `l`)
`ls -li hard_link.txt`
