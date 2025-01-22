# TAR

## Features
tape archive (: for creating those tarballs

## Flags
- `--append`, `-r`
- `--file`, `-f=archive` for file archive as tar archive
- `--gzip`, `-z` compress to archive using gzip
- `--ungzip`, `--gunzip` decompress / extract using gzip

## General Commands

### List files in archive

`tar tvf myarchive.tgz`
or
`tar tf test.tar`

### Tar As Root To /

`sudo tar -xzvf greengrass-OS-architecture-1.10.0.tar.gz -C /`

## Compress / create archives

## Create archive
`tar -cf test.tar file1 file2 file3`

## Create compressed archive from directory
`tar -czvf my_folder.tar.gz /home/user/my_folder`

### Create Tar file zipped

`tar zcvf file.tar file1.txt file2.txt`

## Extract / Decompress

### Extract tar.gz
`tar -xzf myarchive.tar.gz`

### Extract files to current directory

`tar -xf archive.tar`

### Extract Tar To Another Directory

`tar -xf archive.tar -C $HOME/.cache`

### Extract tar.bz2

`tar -xjf`
