# MYSQL DOCKER

## Resources

- [MySQL Official Docker Image](https://hub.docker.com/_/mysql)

## Start a server instance

```console
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

## Connect to MySQL from command line client

```console
docker run -it --network some-network --rm mysql mysql -hsome-mysql -uexample-user -p
```

## Create database dump

```console
docker exec some-mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /some/path/on/your/host/all-databases.sql
```

## Restore from dump files

```console
docker exec -i some-mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /some/path/on/your/host/all-databases.sql
```
