# RUST CRATE SERDE WITH

## Resources

- [Rust crate serde with](https://docs.rs/serde_with/latest/serde_with/)
- [Rust create serde_with double option](https://docs.rs/serde_with/latest/serde_with/rust/double_option/)

## Features

- custom helpers to use with serde `with` and `as` notation
- double option makes a distinction between a missing, unset, or existing value

## Use

```console
cargo add serde_with
```

## Double Option

- ignore missing properties
- specifically handle properties set to `null` to be deleted

```rust
#[derive(Deserialize)]
pub struct RequestTask {
    pub id: Option<i32>,
    #[serde(
        default,
        skip_serializing_if = "Option::is_none",
        with = "::serde_with::rust::double_option"
    )]
    pub priority: Option<Option<String>>,
}
```
