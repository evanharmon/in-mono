# RUST CRATE SEAORM

## Resource

- [Rust crate seaORM site](https://www.sea-ql.org/SeaORM/)
- [seaORM cli docs](https://www.sea-ql.org/SeaORM/docs/generate-entity/sea-orm-cli/)

## Install sea-orm-cli

```console
cargo install sea-orm-cli
```
## Generate entity files

assumes env `DATABASE_URL` already set
```console
sea-orm-cli generate entity -o src/database
```

