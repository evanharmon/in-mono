# RUST CARGO TOML

## Features
toml file of cargo config and depenencies

## Best practices
- pin to minor versions to get security updates `=0.09`
- use `cargo-audit` to catch vulnerabilities / malicious patch versions

## Add A Package To Cargo.toml

`rustfmt = "0.9.0"`

## Define binaries
this is best practice if you have MULTIPLE binaries in the same crate
unnecessary if you have just one.

```toml
[package]
name = "my_project"
version = "0.1.0"
edition = "2021"

[[bin]]
name = "web_server"
path = "src/bin/web_server.rs"

[[bin]]
name = "admin_tool"
path = "src/bin/admin_tool.rs"
```

## Use Private Crate

can use a workspace package from another directory
supports using unpublished crates in same workspace

in Cargo.toml

```toml
[dependencies]
filer = {version = "0.1.0", path = "./filer"}
```