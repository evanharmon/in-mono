# DOCKER COMPOSE WATCH

## Resources
- [Docker Compose watch docs](https://docs.docker.com/compose/how-tos/file-watch/)

## Features
- allows greater granularity than what is practical in bind mounts
- supports .dockerignore rules
- `sync` action is good for copying over updated config files without restarts
- `sync+restart` action is good for restarting on config file changes without a rebuild
- `rebuild` action rebuilds and restarts

## Limitations
- relies on `stat`, `mkdir`, and `rmdir`
- glob patterns aren't supported

## Command
`docker-compose watch`
or specific services
`docker-compose watch go-app`

## Example node app
rebuilds /restarts on package.json changes
copies over any changes to ./web but don't restart container

```yml
services:
  web:
    build: .
    command: npm start
    develop:
      watch:
        - action: sync
          path: ./web
          target: /src/web
          ignore:
            - node_modules/
        - action: rebuild
          path: package.json
```

## Example full-stack node

```yml
services:
  web:
    build: .
    command: npm start
    develop:
      watch:
        - action: sync
          path: ./web
          target: /app/web
          ignore:
            - node_modules/
        - action: sync+restart
          path: ./proxy/nginx.conf
          target: /etc/nginx/conf.d/default.conf
  backend:
    build:
      context: backend
      target: builder
```