# MYSQL

## Resources

- [MySQL 8 Doc](https://dev.mysql.com/doc/refman/8.0/en/)
- [MySQL Example Databases](https://dev.mysql.com/doc/index-other.html)

## Copy A Database <name>

```console
mysqldump -u root <database_local> > dump.sql
mysqladmin -u root create <new_database_name>
mysql -u root <new_database_name> < dump.sql
```
