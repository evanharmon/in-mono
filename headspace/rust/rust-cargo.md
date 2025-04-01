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

## Install Dependencies

`cargo build`

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

## Update dependencies

```bash
# check to see what would be updated
cargo update -v --locked
# Do the updates
cargo update
```

## Search for a crate
`cargo search axum`