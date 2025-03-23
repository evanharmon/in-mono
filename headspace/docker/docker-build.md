# DOCKER BUILD

## Resources

- [Docker Build ARG in Dockerfile FROM](https://www.jeffgeerling.com/blog/2017/use-arg-dockerfile-dynamic-image-specification)
- [Docker Best Practices for STDIN](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#pipe-dockerfile-through-stdin)
- [Dockerfile build Stop At Stage](https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage)

## Build Image

`docker build -t "neovim-docker" .`

## Build Docker Image From STDIN, Local Build Context

```bash
docker build -t -f- . <<EOF
FROM busybox
COPY somefile.txt .
RUN cat /somefile.txt
EOF
```

## Debug Using Multi-Stage Builds
build up to target

`docker build --target builder -t alexellis2/href-counter:latest .`

## Build Docker Image With NO Context

`docker build - < Dockerfile`

## Debug previous image layer on failures
have to turn buildkit OFF!
`DOCKER_BUILDKIT=0 docker build -t myimage:latest .`

## AWS SDK Troubleshooting

If the docker build is complaining about aws env variables for the SDKs, use
the following flags to make sure a stale layer isn't in place

```bash
docker build -t myimage \
  --no-cache \
  --force-rm \
  --build-arg AWS_ACCESS_KEY_ID \
  --build-arg AWS_SECRET_ACCESS_KEY \
  --build-arg AWS_SESSION_TOKEN \
  -f Dockerfile .
```
