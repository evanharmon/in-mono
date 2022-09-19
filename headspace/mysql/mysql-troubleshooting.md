# MYSQL TROUBLESHOOTING

## Check For Locks

```console
show engine innodb status;
```

## Locking Issues

```sql
SELECT @@GLOBAL.tx_isolation, @@tx_isolation;
SET @@GLOBAL.tx_isolation = "READ-COMMITTED";
SET TX_ISOLATION = "READ-COMMITTED";
```

## Fixing Dreaded 'server quit without updating PID file

examine .err file in /usr/local/mysql/data
move it to Trash after fixing error

## MySQL 8 `ER_NOT_SUPPORTED_AUTH_MODE`

- use `xprotocol` which has port `33060` as default
