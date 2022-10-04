# DOCKER CP CLI

## Resources

- [Docker cp Docs](https://docs.docker.com/engine/reference/commandline/cp/)

## Copy Localhost File to Docker Container

Does not work for images - only running containers. Run the container first,
and even if it closes you can still use the container for the copy.

```console
docker cp filename 732e4ffd08fe:/home/dev/filename
```

## Copy container file to localhost

```console
docker cp 732e4ffd08fe:/home/dev/filename filename
```
