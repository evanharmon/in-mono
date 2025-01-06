# FIND EXEC

## Features
executes upon each found file / directory

## Examples

### Find file and cat contents
`find -name 'myfile.txt' -exec cat {} \;`

### Remove Directories With Exec
use specific folder name and max depth for safety / speed

dry run

`find ./folder-name -maxdepth 1 -type d -name ".terraform" -print`

delete

`find ./folder-name -maxdepth 1 -type d -name ".terraform" -prune -exec rm -rf {} \;`

### Remove Files With Exec

dry run

`find ./folder-name -maxdepth 1 -type f -name ".env" -prune -exec rm -rf {} \;`

delete

`find ./folder-name -maxdepth 1 -type f -name ".env" -prune -exec rm -rf {} \;`
