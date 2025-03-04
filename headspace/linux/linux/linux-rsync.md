# LINUX RSYNC

## Features
Sync files and directories locally or over a network.
- only copies data that has changed

## Flags
- `-a`, `--archive`: Preserves permissions, timestamps, and ownership.
- `-z`, `--compress`: Compresses data during transfer to reduce bandwidth usage.
- `-n`, `--dry-run`: Performs a dry run without actually transferring any files.
- `-e`, `--rsh` or `--ssh`: Specifies the remote shell command to use (default is `ssh`).

## Best practices

- always use a frontslash for directories `/home/evan/files/`

## Limitations

- remote server MUST have SSH daemon running on it

## Use cases

### Local Synchronization
synchronize files between two local directories
`rsync -az /home/user/source/ /home/user/destination/`

### Remote File Transfer
Copy files from a remote server (e.g., `remote-server:/path/to/files`) to your
local machine or vice versa.

`rsync -az user@remote-server:/path/to/files /local/path/`

### Backup
synchronizing your critical data with an external hard drive or cloud storage service.

`rsync -az /home/user/source/ /media/backup/backup-20230215`

### Data Replication
Mirror file systems between two servers or nodes, ensuring that both locations have identical data.
`rsync -az /mnt/server1/files/ /mnt/server2/files/`

### File Comparison
compare the contents of two directories and highlight any differences.

`rsync -an --dry-run /home/user/source/ /home/user/difference/`