# DOCKER GENERAL

## Specify host
`docker -H <example_host.com> ps`

## Save time docker files

run as one line to speed it up

## Search for container by name

`docker ps --filter "name=nvim"`

## View container logs

`docker logs <container name>`

## View log of docker

`systemctl status docker`

## Mac docker.sock

located at `/private/var/run/docker.sock`

## Get registry info

`docker login | rg registry`

## Limit to # of cpus

CPUs in which to allow execution (0-3, 0,1)

`--cpuset-cpus=""`
