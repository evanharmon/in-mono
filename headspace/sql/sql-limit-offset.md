# SQL LIMIT OFFSET

## Support pagination via OFFSET

```sql
SELECT *
FROM rental
WHERE rental.return_date is NULL AND rental_date < current_DATE
ORDER BY title
OFFSET 20
LIMIT 20
```
