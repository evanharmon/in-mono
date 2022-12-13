# RUST ITERATOR

## Resources

- [Rust docs filter](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.filter)

## Examples

remember to destructure as needed

```rust
fn zero_crossing_locations(frames: Vec<f64>) -> Vec<f64> {
    frames.into_iter().filter(|&f| f > 0.0).collect()
}
```

```rust
let a = [0, 1, 2];
let mut iter = a.into_iter().filter(|&x| *x > 1); // both & and *
```

```rust
let a = [0, 1, 2];
let mut iter = a.into_iter().filter(|&&x| x > 1); // two &s
```

## Turn Vector In To Iterator

Borrow reference to item `iter()`
Editable borrowed reference to item `iter_mut()`
Take / Consume ownership `into_iter()`

## Check if iterators are equal

good to compare two collections for equality

```rust
let check = _first_list.iter().eq(_second_list.iter());
```

## Check if sublist of another list

```rust
[1, 2, 3].starts_with(&[1, 2]);
```
