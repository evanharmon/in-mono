# DOCKER CONTAINERS

## List docker container processes

`docker ps -a`

## List PIDs inside container

Have to exec in to container

`docker exec nvim ps aux`

## List PIDs Inside Container

Have to exec in to container

`docker exec nvim kill 11416`

## Create Docker Container

`docker create --name my-container-name image_name`

## Enter Docker Container As Root

`docker exec -u 0 -it mycontainer bash`

## Stop docker container

`docker stop <hash>`

## Remove stopped docker container (not delete)

`docker rm <hash>`

## Remove All Running Containers

`docker rm -f $(docker ps -aq)`

## Bash Access

`docker exec -it my-container-name bash`

## Leave Container But Keep It Running

```console
<ctrl>pq
```

## Check Stats On Docker Container

`docker stats <UUID>`

## Check Log

`docker logs <UUID>`

## Check Events

`docker events --since 1h`

## Export Container To Tar

helpful when no shell is installed

`docker export f05eb31111 > contents.tar`
