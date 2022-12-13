# RUST ENUMS

## Resources

- [Rust book defining an enum](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

## Get Enum Variant as string

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
