# RUST FOR LOOPS

## Features

- supports `break`, `continue`

## Fixed range of loops

```rust
for _ in 0..10 { }
```

## For loop with iterator

this is not recommended:

- performance cost for bounds checking
- safety issues bc collection could change underneath you

```rust
// not recommended
let collection = [1,2,3,4,5];
for i in 0..collection.len() {
  let item = collection[i]
}
```
