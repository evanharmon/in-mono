# SQL COMMON DATA TYPES

## Text

- `CHAR(X)` which adds padding
- `VARCHAR(X)` which does not pad
- `TEXT`, `LONGTEXT`, for storing large text without specifying max size
- `ENUM`

## Numeric

- `INT`, `SMALLINT`, `BIGINT`, etc for numbers with no decimals
- `DECIMAL`, `NUMERIC` with fixed precision
- `FLOAT`, `REAL` approximated floating point values
- `DOUBLE`, `DOUBLE PRECISION` twice the precision of floating point

## Date

- `DATE` no hours or minutes
- `DATETIME`, `TIMESTAMP` with hours and minutes, etc

## Miscellaneous

- `JSON` supported by MySQL / Postgres
- `BOOLEAN`
