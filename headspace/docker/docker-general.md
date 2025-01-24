# DOCKER GENERAL

## Save Time Docker Files

run as one line to speed it up

## Search for container by name

`docker ps --filter "name=nvim"`

## View Container Logs

`docker logs <container name>`

## View log of Docker

`systemctl status docker`

## Mac docker.sock

located at `/private/var/run/docker.sock`

## Get Registry Info

`docker login | rg registry`

## Limit to # of Cpus

CPUs in which to allow execution (0-3, 0,1)

`--cpuset-cpus=""`
