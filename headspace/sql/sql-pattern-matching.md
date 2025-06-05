# SQL PATTERN MATCHING

## Features
postgres versions as default

## Operators

- `LIKE`: case-sensitive
- `ILIKE`: case-insensitive

## Examples

### Wildcards
```sql
-- Match starting with `Jo`
SELECT * FROM employees WHERE first_name LIKE 'Jo%'; 
-- Match ending with `er`
SELECT * FROM employees WHERE last_name LIKE '%er'; 
-- Match containing `an`
SELECT * FROM employees WHERE first_name LIKE '%an%';
-- Match any case of the name `john`
SELECT * FROM employees WHERE first_name ILIKE '%john%'; 
```

### Find fields with uppercase letters
```sql
SELECT characters.name
FROM characters
WHERE characters.name = UPPER(characters.name)
```
