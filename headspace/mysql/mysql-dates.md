# MYSQL DATES

## Use Current Timestamp

```sql
UPDATE `table` SET timestamp_column=NOW();
```

## Add to Current Timestamp

Singular version of intervals!

```sql
UPDATE `table` SET timestamp_column=DATE_ADD(NOW(), interval 10 minute);
```
