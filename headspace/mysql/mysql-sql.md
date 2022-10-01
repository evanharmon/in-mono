# MYSQL SQL

## Resources

- [MySQL vs Postgres Differences](https://wiki.postgresql.org/wiki/Things_to_find_out_about_when_moving_from_MySQL_to_PostgreSQL)

## Quote System Identifiers

can use `backticks` but safer to use double quotes `""`

## Comments

can use `#` to begin a comment line but prefer `--` as ANSI standard

## Create Database

can use `CREATE DATABASE` or `CREATE SCHEMA`
note that `CREATE_SCHEMA` is just a MySQL convention

## `IF NOT EXISTS`

MySQL supports conditionally creating databases, tables, etc without erroring

## `AUTO_INCREMENT`

Only MySQL supports `AUTO_INCREMENT`. Other dbs use the more convential 'SERIAL'

## `SERIAL`

`SERIAL` is an alias for `BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE`

careful as this is a specific data type `BIGINT`

`SERIAL DEFAULT VALUE` is an alias for int column `NOT NULL AUTO_INCREMENT UNIQUE`
