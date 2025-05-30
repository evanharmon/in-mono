# DOCKER COMPOSE ENV

## Resources

- [Docker Compose environment variables](https://docs.docker.com/compose/environment-variables/)
- [Docker compose env file docs](https://docs.docker.com/compose/env-file/)

## Features
- docker-compose cli will automatically look for `.env` file

## Specify specific env file in cli
`docker compose --env-file ./config/.env.dev up`

## Reference environment variables

```yml
services:
  master:
    image: jenkins-master:latest
    environment:
      GITHUB_USER: ${GITHUB_USER}
      GITHUB_TOKEN: ${GITHUB_TOKEN}
```

## Env file

removes the need to hard-code in to compose file

```yml
web:
  env_file:
    - web-variables.env
```
