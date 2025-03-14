# LINUX APT-GET

## Features
separate from `apt`
- less features than `apt`, `apt` is now more preferred

## Install Package

`apt-get install vim`

## Download Package

`apt-get download vim`

## See What updates are needed

```bash
apt-get upgrade --dry-run
# or
apt-get -s upgrade
```

## Clear out local repo of retrieved package files

`apt-get clean`

## Package not found errors

Try `apt-get update` first

## Search for a package

`apt-cache search zsh`

## Get dependencies of a package

`apt-cache depends vim`