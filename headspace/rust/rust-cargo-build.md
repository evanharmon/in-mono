# RUST CARGO BUILD

## Resources

- [Rust cargo book cargo build](https://doc.rust-lang.org/cargo/commands/cargo-build.html)
- [Rust cargo book cargo build cache](https://doc.rust-lang.org/cargo/guide/build-cache.html)

## Features
- use `--locked` to ensure Cargo.lock is used for exact dependencies

## dep-info files

a `cargo build` will generate dependency files.
`/target/debug/` folder will contain `*.d` files listing dependencies

## Build release binary
```bash
# Build only binary crates - not libraries
cargo build --locked --release --bins
# or specificy specific binary
cargo build --locked --release --bin axum_api
# run the target release binary
target/release/app
```

## Check to see if cargo.lock needs updating
`cargo update --locked`