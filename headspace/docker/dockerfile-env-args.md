# DOCKERFILE

## Resources

- [Dockerfile ENV Docs](https://docs.docker.com/engine/reference/builder/#arg)
- [Dockerfile Args Docs](https://docs.docker.com/engine/reference/builder/#arg)

## Features
- `ENV` commands override `ARG`
- `ENV` variables are available at runtime
- `ARG` lines don't create separate layers

## Limitations
- `ENV` variables don't persist between stages
- each `ENV` line creates a layer
- `ARG` variables must be re-declared after each stage
- `ARG` variables are NOT allowed in `CMD` as not available at container runtime

## Send Arguments to Dockerfile on Build

`docker build --build-arg userHome=$HOME .`

## Use ARG Argument

```dockerfile
ARG userHome
ADD $userHome/.config /home/dev
```

with default

```dockerfile
ARG VERSION=18
```

## Redeclare ARG arguments across stages
Re-declaring it keeps the same value as the initial declaration
```dockerfile

ARG RUST_VERSION=1.84.1
ARG APP_NAME=axum_api
FROM rust:${RUST_VERSION} AS base
...

FROM debian:bookworm-slim
ARG APP_NAME
```

## Convert ARG to ENV for CMD
ARG is not available at container runtime so can't use in `CMD`
or `ENTRYPOINT`

convert to an ENV instead - be careful - for example TINI doesn't like this for the actual binary

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
