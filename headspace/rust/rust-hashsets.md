# RUST HASHSETS

## Limitations

- `sort_unstable` may re-order

## Recipes

### Unique a matrix of slices

```rust
use std::collections::HashSet;

fn main() {
    let pairs = [[1, 2], [2, 3], [2, 1]];
    let mut pair_set: HashSet<[i32; 2]> = HashSet::new();
    for pair in pairs {
        // make a copy, sort, then add to set
        let mut pair_copy = pair.clone()
        pair_copy.sort_unstable();
        pair_set.insert(pair_copy);
    }
    println!("{:?}", pair_set);
}
```
