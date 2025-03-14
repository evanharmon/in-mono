# RUST ARRAYS

## Resources

- [SO arrays vs slices](https://stackoverflow.com/questions/27554838/what-is-the-difference-between-vecstruct-and-struct)
- [SO iterate over slice of vector](https://stackoverflow.com/questions/40613725/iterating-over-a-slices-values-instead-of-references-in-rust/40613870)


## Recipes

### Declare, copy, and iterate over a matrix

```rust
fn print_pairs(pairs: &Vec<Vec<i32>>) {
    for pair in pairs {
        println!("{:?}", pair);
    }
}

fn main() {
    let pairs = vec![
        vec![1, 2],
        vec![2, 3],
        vec![2, 1]
    ];
    let pairs_copy = pairs.clone();
    print_pairs(&pairs);
    print_pairs(&pairs_copy);
}
```

## Common Mistakes

#### mismatched types expected &[[f64; 2]], found struct `std::vec::Vec`

A slice must be passed NOT a vector

```rust
let frames: Vec<[f64; 2]> = signal.map(|f| f).collect();
let trimmed_samples = find_start(frames.as_slice());
```

## Iterate Over Slice Of Vector

```rust
fn main() {
    let v = vec![1, 2, 3];
    let slice = &v[..];
    for u in slice.iter().cloned() {
        let u: usize = u; // prove it's really usize, not &usize
        println!("{}", u);
    }
}
```
