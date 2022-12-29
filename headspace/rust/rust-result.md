# RUST RESULT

## Resources

- [Rust By Example result error handling](https://doc.rust-lang.org/rust-by-example/std/result.html)

## Unwrap with default

unwraps and sets a default value if the Result is an error

```rust
pub fn color_to_value(_color: ResistorColor) -> u32 {
    let color = ResistorColor::try_from(_color).unwrap_or(ResistorColor::Black);
    color.int_value()
}
```
