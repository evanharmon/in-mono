MYSQL PLAYGROUND

## Requirements

- [Docker](https://docs.docker.com/desktop/install/mac-install/)
- [VSCode SQLTools Extension](https://vscode-sqltools.mteixeira.dev/)
- [MySQL Mac Drivers Extension](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-mysql)

## Download and Setup Sakila Seed

```console
./setup.sh
```

## Start MySQL in Docker

```console
docker-compose up
```

detached

```console
docker-compose up --detach
```

## Stop detached Docker compose

```console
docker-compose down
```

## Remove container and database volume on compose down

```console
docker-compose down -v
```

## Delete database volume manually

Remove container then delete volume

```console
docker rm sakila
docker volume rm sakila_sakiladata
```

## Exec in to container and run MySQL CLI

```console
docker exec -it mysql /bin/bash
```

```console
mysql -uroot -p
```

## Example SQLTools connection settings

excerpt from settings.json

```json
{
  "sqltools.connections": [
    {
      "mysqlOptions": {
        "authProtocol": "xprotocol"
      },
      "previewLimit": 50,
      "server": "localhost",
      "port": 33060,
      "driver": "MySQL",
      "name": "playground",
      "database": "my_test_db",
      "username": "root",
      "password": "not_a_secret_password",
      "connectionTimeout": 30
    }
  ]
}
```
