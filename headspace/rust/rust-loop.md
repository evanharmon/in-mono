# RUST LOOP

## Features

- supports `break`, `continue` when loop label used


## Example

```rust
fn main() {
    let mut i = 0;
    
    loop {
        println!("Loop iteration {}", i);
        i += 1;
        
        if i == 5 {
            break; // Exit the loop when i reaches 5
        }
    }
}
```