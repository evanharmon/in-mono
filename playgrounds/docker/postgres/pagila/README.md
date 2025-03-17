# POSTGRES PAGILA PLAYGROUND

## Requirements

- [Docker](https://docs.docker.com/desktop/install/mac-install/)
- [VSCode SQLTools Extension](https://vscode-sqltools.mteixeira.dev/)
- [Postgres Mac Drivers Extension](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg)

## Download and Setup Pagila Seed

```console
./setup.sh
```

## Start Postgres in Docker

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
docker rm pagila
docker volume rm pagila_pgdata
```

## Exec in to container and run psql CLI

```console
docker exec -it pagila /bin/bash
```

```console
psql --username postgres
```

## Example SQLTools connection settings

excerpt from settings.json

```json
{
  "sqltools.connections": [
    {
      "previewLimit": 50,
      "server": "localhost",
      "port": 5432,
      "driver": "PostgreSQL",
      "name": "pagila",
      "database": "pagila",
      "username": "postgres",
      "password": "not_a_secret_password"
    }
  ]
}
```
