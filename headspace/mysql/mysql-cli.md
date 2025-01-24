# MYSQL CLI

## Resources

- [MySQL 8 CLI Docs](https://dev.mysql.com/doc/refman/8.0/en/mysql.html)

## Show Variables Example

```console
show variables like 'char%';
```

## Show Tables in Database

```console
SHOW TABLES
```

## Run a DDL statement

```bash
mysql -e "CREATE DATABASE IF NOT EXISTS testdb;"
# or
mysql mydb -e "CREATE TABLE mytable (id INT, name VARCHAR(255));"
```