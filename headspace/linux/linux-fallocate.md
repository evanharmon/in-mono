# LINUX FALLOCATE

## Features
pre-allocate space for files or directories
- does not create the file or directory!


## Examples

```bash
# Allocate space for a new 1GB file called "example.txt" on the current working directory.
fallocate -l 1G example.txt

# Check the size and type of the allocated file:
ls -lh example.txt

# You can also pre-zero out the file instead of allocating space without actually creating the file:
fallocate -d example.txt

# If you want to create a sparse file (i.e., a file that only takes up space on disk as data is written to it), use this command:
fallocate -S example.txt
```