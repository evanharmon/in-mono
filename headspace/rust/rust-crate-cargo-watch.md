# RUST CRATES CARGO-WATCH

## Resources

- [Crates cargo-watch](https://crates.io/crates/cargo-watch)

## Features

- watches for code changes and restarts like `nodemon`

## Global Install

```console
cargo install cargo-watch
```

## Run

```console
cargo watch -x run
```

## Watch cargo test

```console
cargo watch -x test
```

## Run binary with cli flags

```console
cargo watch -x "run --bin my-package-bin-name -- --env-1=$ENV_1 --env-2=$ENV_2"
```
