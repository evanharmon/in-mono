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

## Early return

return early and set `Ok()` value
this is handy because in Axum / web services the error type will be different

```rust
use std::num::ParseIntError;

fn multiply(first_number_str: &str, second_number_str: &str) -> Result<i32, ParseIntError> {
    let first_number = match first_number_str.parse::<i32>() {
        Ok(first_number)  => first_number,
        Err(e) => return Err(e),
    };
    let second_number = match second_number_str.parse::<i32>() {
        Ok(second_number)  => second_number,
        Err(e) => return Err(e),
    };
    Ok(first_number * second_number)
}
```
