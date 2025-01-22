# POSTGRES HOST BASED ACCESS CONTROL

## Features
controls access to database instances via `pg_hba.conf` file
- supports rules for connecting from specific hosts
- can specify authentication methods like password, SSL, GSSAPI
- supports user mapping to PostgreSQL users

## Format
format for `pg_hba.conf`
'# TYPE DATABASE USER ADDRESS METHOD'

example:
```conf
local   all         all                               trust
host    mydatabase  myuser      127.0.0.1/32          password
host    mydatabase  myuser      ::1/128               md5
```