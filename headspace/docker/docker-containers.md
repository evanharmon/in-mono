# DOCKER CONTAINERS

## List Docker Container Processes

```console
docker ps -a
```

## List PIDs Inside Container

Have to exec in to container

```console
docker exec nvim ps aux
```

## List PIDs Inside Container

Have to exec in to container

```console
docker exec nvim kill 11416
```

## Create Docker Container

```console
docker create --name my-container-name image_name
```

## Enter Docker Container As Root

```console
docker exec -u 0 -it mycontainer bash
```

## Remove Stopped Docker Container <hash> (NOT DELETE)

```console
docker rm <hash>
```

## Remove All Running Containers

```console
docker rm -f $(docker ps -aq)
```

## Bash Access

```console
docker exec -it my-container-name bash
```

## Leave Container But Keep It Running

```console
<ctrl>pq
```

## Check Stats On Docker Container

```console
docker stats <UUID>
```

## Check Log

```console
docker logs <UUID>
```

## Check Events

```console
docker events --since 1h
```

## Export Container To Tar

helpful when no shell is installed

```console
docker export f05eb31111 > contents.tar
```
