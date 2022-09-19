# MYSQL

## Default Port

3306

## Log In As Root

default / main account is root

```console
mysql -u root -p
```

## CLI Change Root Password

```console
mysqladmin -u root -pcurrentpassword password 'newpassword'
```

## Query Change Root Password

```sql
use mysql;
UPDATE user SET password=PASSWORD('newpassword') WHERE user='root';
```

## Copy A Database <name>

```console
mysqldump -u root <database_local> > dump.sql
mysqladmin -u root create <new_database_name>
mysql -u root <new_database_name> < dump.sql
```

## Show Variables Example

```console
show variables like 'char%';
```
