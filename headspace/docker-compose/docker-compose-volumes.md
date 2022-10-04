# DOCKER COMPOSE VOLUMES

## Resources

- [Docker Compose Docs](https://docs.docker.com/compose/)

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

## Anonymous volume example

```yml
api:
  build: ./api
  ports:
    - '80:80'
  volumes:
    - /app/node_modules
```
