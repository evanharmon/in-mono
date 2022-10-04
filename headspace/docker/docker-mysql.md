# DOCKER MYSQL

## Resources

- [Docker MySQL Spin Up Databases](http://blog.awolski.com/using-docker-to-spin-up-databases-for-development/)
- [Docker MySQL Server official image](https://hub.docker.com/r/mysql/mysql-server/)

## Create MySQL Data Container

tag is version

```console
docker run
  --name my-container-name
  -e MYSQL_RANDOM_ROOT_PASSWORD=yes
  -e MYSQL_ONETIME_PASSWORD=yes
  -d mysql/mysql-server:tag
```

## Get Password

```console
docker logs my-container-name
```

## Set New Password

```console
docker exec -it my-container-name bash
mysql -u root -p
set password=password('newpassword');
set password='password';
```

## Connect From Another Docker

```console
docker run
  --name app-container-name
  --link my-container-name:mysql
  -d app-that-uses-mysql
```

## Start Container and Launch MySQL CLI

```console
docker run
  -it
  --link my-container-name:mysql
  --rm mysql/mysql-server:tag
  sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```

## CLI Passwords Options on Startup/Creation

MYSQL_RANDOM_ROOT_PASSWORD
MYSQL_ONETIME_PASSWORD
