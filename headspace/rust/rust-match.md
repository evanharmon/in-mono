# RUST MATCH

## Resources

- [Rust by example match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html)

## Example

`..` can be used to cover remaining range for type

```rust
pub fn get_success_rate(speed: u8) -> f64 {
    match speed {
        0 => 1.0, // to be exhaustive
        1 | 2 | 3 | 4 => 1.0,
        5 | 6 | 7 | 8 => 0.9,
        9 | 10.. => 0.77,
    }
}
```

## Match Tuples

```rust
pub fn sublist<T: PartialEq>(_first_list: &[T], _second_list: &[T]) -> Comparison {
    // https://exercism.org/tracks/rust/exercises/sublist/solutions/rsalmei
    let superlist = _second_list.is_empty()
        || _first_list
            .windows(_second_list.len())
            .any(|x| x == _second_list);
    let sublist = _first_list.is_empty()
        || _second_list
            .windows(_first_list.len())
            .any(|x| x == _first_list);
    match (superlist, sublist) {
        (true, true) => Comparison::Equal,
        (true, false) => Comparison::Superlist,
        (false, true) => Comparison::Sublist,
        (false, false) => Comparison::Unequal,
    }
}
```
