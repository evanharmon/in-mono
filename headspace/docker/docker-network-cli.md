# DOCKER NETWORK CLI

## Resources

- [Docker network CLI](https://docs.docker.com/engine/reference/commandline/network/)

## Feature

- creates a network for communication between containers
- removes the need to expose posts

## Limitations

- network has to be created before referenced via `docker run`
- does not automatically allow communication between container and HOST

## Create network

```console
docker network create mynetwork
```
