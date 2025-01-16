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

## Wait for a service to be healthy
helpful for running a command - like making sure postgres is ready
because it's not enough for the container to be started

```yml
services:
  flask_app:
    container_name: flask_app
    image: evanharmon/flask_crud_api:1.0
    build: .
    ports: ["3000:3000"]
    environment:
      - DB_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@flask_db:5432/${POSTGRES_DB}
    depends_on:
      flask_db:
        condition: service_healthy

  flask_db:
    container_name: flask_db
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_DB=${POSTGRES_DB}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 5
      start_period: 1s
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata: {}
```