# POSTGRES

## Resources

- [Postgres Docs](https://www.postgresql.org/docs/)
- [Postgres Tutorial Site](https://www.postgresqltutorial.com/)

## Install and start on macOS with brew

```bash
brew install postgresql@16
# runs as background service
brew services start postgresql
# Check auto-generated user
brew services list
# login over psql
psql -U evanharmon postgres
# stop background service
brew services stop postgresql
```

installs postgres and psql to `/opt/homebrew/opt/postgresql@16/bin`
```sh
# set for a session or add to .*rc file
export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"
```

or run in terminal
```bash
LC_ALL="C" /opt/homebrew/opt/postgresql@16/bin/postgres -D /opt/homebrew/var/postgresql@16
```

does an init db with:
`initdb --locale=C -E UTF-8 /opt/homebrew/var/postgresql@16`