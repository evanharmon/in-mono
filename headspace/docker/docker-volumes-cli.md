# DOCKER VOLUMES CLI

## Resources

- [Docker Volumes CLI Docs](https://docs.docker.com/engine/reference/commandline/volume/)

## Inspect and show volume info

note that `Mountpoint` is a path inside the virtual machine NOT the host machine

```console
docker volume inspect sakila_db
```

output:

```json
[
  {
    "CreatedAt": "2022-09-21T22:26:14Z",
    "Driver": "local",
    "Labels": {
      "com.docker.compose.project": "sakila",
      "com.docker.compose.version": "2.10.2",
      "com.docker.compose.volume": "db"
    },
    "Mountpoint": "/var/lib/docker/volumes/sakila_db/_data",
    "Name": "sakila_db",
    "Options": null,
    "Scope": "local"
  }
]
```
