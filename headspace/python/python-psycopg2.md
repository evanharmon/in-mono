# PYTHON PSYCHOPG2

## macOS install of binary wheel

this will fail as PG_CONFIG might not be in path. Postgres is likely installed via homebrew.

```bash
# make sure PG_CONFIG is in path
export PATH=/opt/homebrew/Cellar/postgresql@16/16.6/bin:$PATH

```

## macOS install without wheel

```bash
pip install pyschopg2
pip install psycopg2[pg_config]
```