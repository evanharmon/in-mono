# SQL JOINS

## Features
- default join type is `inner` if not specified

## Basic Joins

### Inner Join

returns only records matching in BOTH tables

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

### Left (Outer) Join
use to ensure ALL records from LEFT table are listed

returns all records from LEFT table along with:
- matching records in RIGHT table
- NULL for no match on side of the RIGHT table

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

## Right (Outer) Join
use to ensure ALL records from RIGHT table are listed

returns all records from RIGHT table along with:
- matching records in LEFT table
- NULL for no match on side of LEFT table

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

### FULL JOIN
use to ensure ALL records from BOTH tables are listed

returns all rows where there is a match in EITHER table
- rows without a match will appear with NULL where there is no matching row

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
FULL JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```
