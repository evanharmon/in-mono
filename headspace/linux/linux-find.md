# Find Command

## Resources

- [Find Tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-find-and-locate-to-search-for-files-on-a-linux-vps)

## Commands

### Search case insensitive

`find -name myfile.txt`

### Search for filename in specific directory
`find /opt -name my-file.txt`

### Search for filenames not matching
`find . -not -name "myfile*"`
or `find . \! -name "myfile*"`

### Search for filename recursively

`find . -name "login*"`

### Find by change (metadata) time
think file permissions, etc. Good for finding recent file permission changes.

change time, less than 1 day: `find -ctime -1`

### List # of folders in a sub-folder

`find ./folder-name -mindepth 1 -maxdepth 1 -type d | wc -l`

### Find files above size
c is bytes, k kilobytes, M megabytes, G gigabytes

greater than 512k: `find -size +512k`
less than 512k: `find -size -512k`

greater than 1M: `find /usr -size +1M`

### Find files between specific sizes
`sudo find /usr -type f -size +5M -size -10M`

### Recursively count files in a directory

`find -type f | wc -l`

## Exec

### Find filename with grep pattern search
`find /etc -type f -exec grep -l "search_term" {} +`
