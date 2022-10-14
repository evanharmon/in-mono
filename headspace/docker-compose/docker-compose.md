# DOCKER COMPOSE

## Resources

- [Docker Compose docs](https://docs.docker.com/compose/)
- [Docker Compose compose file docs](https://docs.docker.com/compose/compose-file/)

## Network

docker compose automatically creates and tears down a network

## Use Links Instead Of Ports

```yml
links:
  - mysql
  - redis
```

## Example Compose file

```yml
version: '3.2'

services:
  database:
    build: hss-couchbase-server
    ports:
      - "8091-8094:8091-8094"
      - "11207-11210:11207-11210"
      - "18091-18094:18091-18094"
  sync-gateway:
    build: hss-couchbase-mobile
    ports:
      - "4984-4985:4984-4985”
```

## Expose

exposes ports to other containers but NOT to host

## Ports

exposes ports to HOST AND other containers

## Interactive equivalent

`it` flag is equivalent to `tty` and `stdin_open` options.
Good for react / hot reloading

```yml
react:
  build: ./frontend
  ports:
    - '3000:3000'
  volumes:
    - ./frontend/src:/app/src
  stdin_open: true
  tty: true
```

## Keep container running

```yml
services:
  app:
    build:
      context: .
    command: sleep infinity
```
