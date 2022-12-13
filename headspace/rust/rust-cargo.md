# RUST CARGO

## Resources

- [Crates docs Guide](http://doc.crates.io/guide.html)

## Limitations

- `cargo new` creates a .git folder as well by default

## Start Project With No .git Folder

```console
cargo new --vcs none
```

## Start A New Project With Binary

```console
cargo new hello_world --bin
```

## Start A New Project As Library

```console
cargo new hello_world --lib
```

## Add A Package To Cargo.toml

```console
rustfmt = "0.9.0"
```

## Install Dependencies

```console
cargo build
```

## Use Private Crate

in Cargo.toml

```toml
[dependencies]
filer = {version = "0.1.0", path = "./filer"}
```

## Add package via CLI

adds to `Cargo.toml`

```console
cargo add axum
```

## Add package and specify features

add specific features

```console
cargo add tokio --features "macros rt-multi-thread fs"
```

## Global install

```console
cargo install cargo-watch
```

## List global installs

```console
cargo install --list
```
