# RUST CRATE ONCE_CELL

## Resources

- [Rust crate once_cell](https://docs.rs/once_cell/latest/once_cell/)

## Features

- doesn't require macros
- good for global data

## Example

```rust
// https://github.com/paulkernfeld/global-data-in-rust
use std::{sync::Mutex, collections::HashMap};
use once_cell::sync::Lazy;

static GLOBAL_MAP: Lazy<Mutex<HashMap<&'static str, &'static str>>> = Lazy::new(|| {
    let mut m = HashMap::new();
    m.insert("key", "value");
    Mutex::new(m)
});

fn main() {
    assert_eq!(GLOBAL_MAP.lock().unwrap().get("key"), Some(&"value"));
}
```
