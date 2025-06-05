# SQL CASE STATEMENTS

## Features
default examples are postgres

## Examples

### Orders
```sql
SELECT order_id, customer_id, order_total,
    CASE
        WHEN order_total > 1000 THEN 'Large Order'
        WHEN order_total > 500 THEN 'Medium Order'
        ELSE "Small Order"
    END AS order_category
FROM orders;
```
