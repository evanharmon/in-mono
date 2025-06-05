# SQL MATH OPERATIONS

## Features
postgres versions as default

## Limitations
- remember to specify decimal places if you want precision - `60.0`

## Examples

## Addition
```sql
-- Returns 15
SELECT (10 + 5) AS RESULT;
```

## Subtraction
```sql
-- Returns 12
SELECT (20 - 8) As RESULT;
```

## Multiplication
```sql
-- Returns 21
SELECT (7 * 3) AS RESULT;
```

## Division
```sql
-- Returns 5
SELECT (20 / 4) AS RESULT;
```

## Round
```sql
-- Returns 25.1
SELECT ROUND(25.125, 1) AS RESULT;
-- Increase precision, 25.100
SELECT ROUND(25.1, 3) AS RESULT;
```
