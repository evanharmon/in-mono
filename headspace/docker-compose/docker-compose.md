# DOCKER COMPOSE

## Resources

- [Docker Compose Docs](https://docs.docker.com/compose/)

## Use Links Instead Of Ports

```YML
links:
- mysql
- redis
```

## Example Compose file

```YML
---
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

## Environment Variables

```YML
services:
  master:
    image: jenkins-master:latest
    environment:
      GITHUB_USER: ${GITHUB_USER}
      GITHUB_TOKEN: ${GITHUB_TOKEN}
```

## Persistent Volumes Example

```YML
version: '3.2'
services:
  database:
    build: docker-database
    ...
    volumes:
     - db-data:/data
volumes:
  db-data
```

## Expose

exposes ports to other containers but NOT to host

## Ports

exposes ports to HOST AND other containers
