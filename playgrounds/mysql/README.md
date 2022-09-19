MYSQL PLAYGROUND

## Requirements

- [Docker](https://docs.docker.com/desktop/install/mac-install/)
- [VSCode SQLTools Extension](https://vscode-sqltools.mteixeira.dev/)
- [MySQL Mac Drivers Extension](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-mysql)

## Start MySQL in Docker

```console
docker-compose up
```

## Exec in to container and run MySQL CLI

```console
docker exec -it mysql /bin/bash
```

```console
mysql -uroot -p
```
