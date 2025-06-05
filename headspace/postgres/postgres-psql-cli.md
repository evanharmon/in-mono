# POSTGRES

## Resources

- [Postgres PSQL CLI Docs](https://www.postgresql.org/docs/current/app-psql.html)

## Login with username

`psql -U postgres -h localhost -p 5432`

## Login with database url and specific db
```sh
psql postgres://postgres@localhost:5432/postgres
# or on fresh postgres
psql postgres://localhost:5432/postgres
```

## PSQL commands

### List Roles

`\du`

### List Databases

`\l`

### Quit

`\q`

### Connect to database
use / select a specific db

`\c postgres`

### Show config file location

`SHOW config_file`

### List catalog schemas

`\dn`

### List table / schemas
`\d`
or with additional detail
`\d+`

### Show hostname
`show hostname`