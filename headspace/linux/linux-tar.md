# TAR

## Features
tape archive (: for creating those tarballs
- stores file ownership and permissions information
- picks correct decompression tool based on archive extension

## Flags
- `--append`, `-r`
- `--extract`, `-x`
- `--create`, `-c`
- `--list`, `-t`
- `--file`, `-f`, `-f=archive` for file archive as tar archive
- `--gzip`, `-z` compress to archive using gzip
- `--ungzip`, `--gunzip` decompress / extract using gzip
- `--bzip2`, `-j`
- `--xz`, `-J`
- `--autocompress`, `-a`, easy mode driven by tarball extension

## Gotchas
- place `f` LAST: tar expects the path directly after the file option
- be careful using absolute paths - they end up in the tarball like that!!
- use `sudo tar` to ensure file ownership / permissions stays the same if desired

## Best practices
- always run `tar tf archive.tar` to see where (path) files will extract

## General Commands

### List files in archive

```bash
tar tf myarchive.tgz
tar tf test.tar
tar --list --file test.tar
```

### Tar As Root To /

`sudo tar -xzvf greengrass-OS-architecture-1.10.0.tar.gz -C /`

## Compress / create archives

### Create archive from files
won't be compressed
`tar -cf test.tar file1 file2 file3`

### Create archive from directory
```bash
# with absolute paths
sudo tar -cPf archive.tar /var/log/
```

### Append file to archive
`tar -af archive.tar myfile.txt`

### Append directory to archive
uses create - which is a gotcha
`tar -cf archive.tar mydir/`

### Create compressed archive from directory
`tar -czvf my_folder.tar.gz /home/user/my_folder`

### Create Tar file zipped

`tar zcvf file.tar file1.txt file2.txt`

## Extract / decompress

### Extract tar.gz
extracts files to current directory
```bash
tar -xzf myarchive.tar.gz
tar -xf archive.tar
```

### Extract tarball to another directory

```bash
tar -xf archive.tar -C $HOME/.cache
tar --extract --file archive.tar --directory $HOME/.cache
```

### Extract tarball and retain all ownership / permissions
use sudo!
`sudo tar --extract --file archive.tar --directory /tmp`

### Extract tar.bz2

`tar -xjf`
