# README
adapted from the example guide: https://dev.to/francescoxx/build-a-crud-rest-api-in-go-using-mux-postgres-docker-and-docker-compose-2a75
Simple go playground for an app with a postgres database of users. This is not meant to be production ready or best-practice, it's for playgrounding.

## Commands
build:
`docker-compose build`

run:
`docker-compose up -d`

watch for changes to go app:
`docker-compose watch`
or
`docker-compose up go-app --watch`

stop but keep postgres data:
`docker-compose down --remove-orphans`

stop and delete postgres data:
`docker-compose down -v --remove-orphans`