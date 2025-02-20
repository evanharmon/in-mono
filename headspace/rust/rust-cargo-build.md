# RUST CARGO BUILD

## Resources

- [Rust cargo book cargo build](https://doc.rust-lang.org/cargo/commands/cargo-build.html)
- [Rust cargo book cargo build cache](https://doc.rust-lang.org/cargo/guide/build-cache.html)

## dep-info files

a `cargo build` will generate dependency files.
`/target/debug/` folder will contain `*.d` files listing dependencies

## Build release binary
```bash
cargo build --release --bins
# or specificy specific binary
cargo build --release --bin axum_api
```
