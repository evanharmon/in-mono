# POSTGRES SQL

## Resources

- [Postgres vs MySQL Differences](https://wiki.postgresql.org/wiki/Things_to_find_out_about_when_moving_from_MySQL_to_PostgreSQL)

## Comments

use `--` to begin a comment line

## Quote System Identifiers

Postgres does NOT support `backticks`
use double quotes "" for field names, table names, etc

## Case Sensitive System Identifiers

BEWARE creating a database, table, field, or column with quotes ENFORCES case sensitivity

## String Comparisons

case sensitive for string comparisons

## `IF NOT EXISTS`

Postgres does not support this as of v14
