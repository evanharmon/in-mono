# RUST CARGO

## Resources

- [Crates docs Guide](http://doc.crates.io/guide.html)

## Limitations

- `cargo new` creates a .git folder as well by default

## Start Project With No .git Folder

`cargo new --vcs none`

## Start A New Project With Binary

`cargo new hello_world --bin`

## Start A New Project As Library

`cargo new hello_world --lib`

## Add A Package To Cargo.toml

`rustfmt = "0.9.0"`

## Install Dependencies

`cargo build`

## Use Private Crate

can use a workspace package from another directory
supports using unpublished crates in same workspace

in Cargo.toml

```toml
[dependencies]
filer = {version = "0.1.0", path = "./filer"}
```

## Add package via CLI

adds to `Cargo.toml`

`cargo add axum`

## Add package and specify features

add specific features

`cargo add tokio --features "macros rt-multi-thread fs"`

## Global install

`cargo install cargo-watch`

## List global installs

`cargo install --list`
