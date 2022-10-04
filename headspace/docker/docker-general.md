# DOCKER GENERAL

## Save Time Docker Files

run as one line to speed it up

## Search for container by name

```console
docker ps --filter "name=nvim"
```

## View Container Logs

```console
docker logs <container name>
```

## View log of Docker

```console
systemctl status docker
```

## Mac docker.sock

located at `/private/var/run/docker.sock`

## Get Registry Info

```console
docker login | rg registry
```

## Limit to # of Cpus

CPUs in which to allow execution (0-3, 0,1)

```console
--cpuset-cpus=""
```
