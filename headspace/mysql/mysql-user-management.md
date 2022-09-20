# MYSQL USER MANAGEMENT

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
