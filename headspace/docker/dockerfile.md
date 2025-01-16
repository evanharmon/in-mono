# DOCKERFILE

## Resources

- [Dockerfile Docs](https://docs.docker.com/engine/reference/builder/)
- [Dockerfile Multistage Builds](https://docs.docker.com/develop/develop-images/multistage-build/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

## Quiet Front-End no prompts

```dockerfile
RUN DEBIAN_FRONTEND=noninteractive apt-get update
```

## Change Directory

```dockerfile
WORKDIR /home/dev/.bin
```

## Change User In Dockerfile

```dockerfile
USER dev2
```

## CMD

provides default arguments to ENTRYPOINT
overridden by user arguments in `docker run`
for `CMD ["", ""]` format, first item must be the binary

```dockerfile
CMD ["/bin/zsh"]
```

## ENTRYPOINT

configure a container that will be run as an executable
arguments added to `docker run` are appended

useful example of CMD / ENTRYPOINT

```dockerfile
FROM Ubuntu

ENTRYPOINT ["sleep"]

CMD ["5"]
```

run `docker run ubuntu-sleeper 10` for override / customization

override entrypoint:
`docker run -it --entrypoint="" ubuntu-sleeper sh`

## Keep Container Running

extend to a docker run with entrypoint flag

```dockerfile
FROM ubuntu:latest
ENTRYPOINT ["tail", "-f", "/dev/null"]
```

## Extend \$PATH

```dockerfile
ENV PATH="/root/go/bin:${PATH}"
```

## Expose Port

```dockerfile
EXPOSE 8080/tcp
```

## Multistage Builds

Use multiple images in a Dockerfile and copy files between them

```dockerfile
FROM eph-bin/base:latest AS bins
FROM eph-nvim/base:latest
COPY --from=bins /root/bins /root/bins
```

## Build Dockerfile From Std In With No Build Context

can speed up builds by not using files in the directory

- [Dockerfile Best Practices speed up build](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#pipe-dockerfile-through-stdin)

```console
cat Dockerfile | docker build my-image/base:latest -
```

## Fail On Any Stage In Pipe Command

If you want the command to fail due to an error at any stage in the pipe, prepend set -o pipefail && to ensure that an unexpected error prevents the build from inadvertently succeeding. For example:

```dockerfile
RUN set -o pipefail && wget -O - https://some.site | wc -l > /number
```

## Inspect `.dockerignore` And Build Context

Note: wont show dotfiles

- [Docker build context SO](https://stackoverflow.com/questions/43808558/docker-command-option-to-display-or-list-the-build-context)

install `ncdu`. `brew install ncdu` or `yum install -y ncdu`

```console
ncdu -X .dockerignore
```
