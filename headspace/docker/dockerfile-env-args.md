# DOCKERFILE

## Resources

- [Dockerfile ENV Docs](https://docs.docker.com/engine/reference/builder/#arg)
- [Dockerfile Args Docs](https://docs.docker.com/engine/reference/builder/#arg)

## Send Arguments to Dockerfile on Build

```console
docker build --build-arg userHome=$HOME .
```

## Use ARG Argument in DockerFile

```dockerfile
ARG userHome
ADD $userHome/.config /home/dev
```

## ENV In Dockerfiles

ENV overrides ARG

## Set Environment Variable In Dockerfile

```dockerfile
ENV HOSTNAME nvim
```

## Set ENV Variable From ARG

```dockerfile
ARG DEFAULT_PORT
ENV PORT $DEFAULT_PORT
```

## Unset ENV Variables Not To Persist In Container

Every `ENV` docker command creates a layer and will exist in the resulting
docker container. To create a non-persisting env variable, use a chained `RUN`
command.

```dockerfile
RUN export ADMIN_USER="mark" \
    && echo $ADMIN_USER > ./mark \
    && unset ADMIN_USER
```
