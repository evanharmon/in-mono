# DOCKER BIND MOUNTS

## Resources

- [Docker Bind Mounts Docs](https://docs.docker.com/storage/bind-mounts/)
- [Docker Bind Mount Consistency MacOS](https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos)

## Features
Mount folders from the host - not a volume.

## Mount Folder To Container

use delegate consistency on MAC OSX to help performance

SSH folder

```sh
docker run -it --rm --name nvim \
  --mount type=bind,source="$HOME/.ssh",destination=/root/.ssh,readonly \
  eph-nvim/base:latest
```

Git repo folder

```sh
PROJECT_DIR="$(basename "$PWD")"; CONTAINER_DIR="/root/code"; \
docker run -it --rm --name nvim \
  --mount type=bind,source="$HOME/.ssh",target=/root/.ssh,readonly \
  --mount type=bind,source="$(pwd)",target="$CONTAINER_DIR"/"$PROJECT_DIR",consistency=delegated \
  -w "$CONTAINER_DIR"/"$PROJECT_DIR" \
  --env TERM=xterm-256color \
  eph-nvim/base:latest \
```
