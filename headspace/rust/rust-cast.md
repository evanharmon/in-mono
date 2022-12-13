# RUST CAST

## Resources

- [Rust by example casting](https://doc.rust-lang.org/rust-by-example/types/cast.html)

## Limitations

- no implicit type conversion in rust
- `as` can silently produce odd results - try not to use it

## Int to float

```rust
const CARS_PER_HOUR: u8 = 221; // 0 - 255
let total_cars_float = total_cars as f64;
```

## Multiply two u8 for u32

```rust
const CARS_PER_HOUR: u8 = 221;
let speed: u8 = 5;
let total_cars: u32 = speed as u32 * CARS_PER_HOUR as u32;
```
