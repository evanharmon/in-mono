# DOCKER SECRETS

## Requirement: Start docker swarm / stack

```console
docker stack deploy -c docker-compose.yml mystack
```

## Create a Docker Secret

```console
echo "evanharmon" | docker secret create github-user -
```
