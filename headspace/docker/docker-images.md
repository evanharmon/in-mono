# DOCKER IMAGES

## Resources

- [Docker images](https://docs.docker.com/engine/reference/commandline/images/)

## Rename an Image

`docker tag myimage:latest mynewimage:latest`

## Stop Docker Image <hash>

`docker stop <hash>`

## List Docker Images

`docker images`

## Download Image

`docker pull image-name`

## Delete Docker Image <hash> from Downloaded Images

`docker rmi <hash>`

## Get Image Info In JSON

`docker images repo1 --format "{{json . }}"`

## Export Image Data And Parse With JQ

```bash
docker images --format "{{json . }}" \
  | jq .Repository | grep -v <exclude random stuff here> > images.txt
```

## Delete All Images By Name

Pretty Nuclear!

`docker rmi $(docker images --format '{{.Repository}}:{{.Tag}}' | rg myimage)`

## Create tar from image

look at image contents without running container

1. create container and note container_id
2. export container as tar
3. cleanup

```bash
docker create --name="tmp_$$" myimage:tag
docker export tmp_$$ > tar t
docker rm tmp_$$
```

for platform mismatch, may have to export specific container\*id instead of `tmp_$$`

`docker export f05eb31111 > contents.tar`
