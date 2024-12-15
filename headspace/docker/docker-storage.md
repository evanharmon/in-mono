# DOCKER STORAGE

## Resources

- [Docker Storage](https://docs.docker.com/engine/storage/)

## Features
docker stores at `/var/lib/docker`

- storager drivers used for management
- image (previous) layers are read-only
- container (run) layer is read-write

example storage folders:
- aufs
- containers
- image
- volumes

## Storage drivers
depends on OS. Docker chooses the best fit. Storage drivers DO NOT manage volumes.

- AUFS (ubuntu)
- ZFS
- BTRFS
- Device Mapper
- Overlay
- Overlay2
etc.

## Container layer
uses copy-on-write to create new versions of files. Any further changes would use this new file.
data gets deleted on stop though.