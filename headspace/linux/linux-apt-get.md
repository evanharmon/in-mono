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

## Erase old downloaded archive files
Recommended approach for dockerfiles
removes cached packages
`apt-get clean`

```Dockerfile
RUN apt-get update && \
    apt-get install -y --no-install-recommends <package1> <package2> && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

clears out:
- `/var/cache/apt/archives`
- `/var/cache/apt/archives/partials`

leaves:
- `/var/lib/apt/lists/*`
- lock file


## Clear out obsolete deb-packages
NOT the recommended approach for Dockerfiles
removes package files that can no longer be downloaded
`apt-get autoclean`

clears out:
- `/var/cache/apt/archives`

leaves:
- `/var/cache/apt/archives/partials`


## Erase old downloaded archive files
removes orphaned packages no longer needed by system or by dependencies
NOT the recommended approach for Dockerfiles - can remove things you need

```bash
apt-get autoremove
# Remove config files as well
apt-get autoremove --purge
```

affects:
- `/var/lib/dpkg`
- `/var/cache/apt/archives`
- `/var/cache/apt/archives/partials`

## Package not found errors

Try `apt-get update` first

## Search for a package

`apt-cache search zsh`

## Get dependencies of a package

`apt-cache depends vim`