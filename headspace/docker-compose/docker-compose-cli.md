# DOCKER COMPOSE CLI

## Start in detached mode

```console
docker-compose up --detach
```

## Bash In To Compose Service

```console
docker-compose exec service_name bash
```

## Tail And Follow Logs

```console
docker-compose logs --tail 50 -f hss-sync-gateway
```

## Destroy Persistent Volumes and containers

```console
docker-compose down -v
```

## Force Exit On Container Exit

```console
docker-compose up --abort-on-container-exit
```
