# DOCKER COMPOSE CLI

## Start in detached mode

`docker-compose up --detach`

## Bash In To Compose Service

`docker-compose exec service_name bash`

## Tail And Follow Logs

`docker-compose logs --tail 50 -f hss-sync-gateway`

## Destroy Persistent Volumes and containers

`docker-compose down -v`

## Remove orphan containers
`docker-compose down --remove-orphans`

## Force Exit On Container Exit

`docker-compose up --abort-on-container-exit`

## Force rebuild of dockerfiles

`docker-compose up --build`
