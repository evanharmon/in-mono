# RUST STRINGS FORMAT

## Resources

- [Rust docs std::format](https://doc.rust-lang.org/std/macro.format.html)

## Format with arguments

```rust
pub fn info(level: LogLevel, message: &str) -> String {
    return format!("[INFO]: {}", message);
}
```

## Format with enums

```rust
pub enum LogLevel {
    Info,
    Warning,
    Error,
}
pub fn log(level: LogLevel, message: &str) -> String {
    let upper_level_str = format!("{:?}", level).to_uppercase();
    return format!("[{}]: {}", upper_level_str, message);
}
```
