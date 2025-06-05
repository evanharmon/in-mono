# SQL GROUP BY

## Features
fields not using in aggregate expressions, that should be grouped

## Example
```sql
SELECT 
    category, -- Group by category
    product_name, -- Must be in GROUP BY if not an aggregate function
    SUM(sales) AS total_sales -- Aggregate function
FROM 
    orders
GROUP BY 
    category, product_name; -- Both in GROUP BY
```
