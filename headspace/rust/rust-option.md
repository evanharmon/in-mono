# RUST OPTION ERROR HANDLING

Notes on rust error handling

## Resources

- [Rust By Example option](https://doc.rust-lang.org/rust-by-example/std/option.html)
- [Rust docs option type](https://doc.rust-lang.org/1.5.0/book/error-handling.html#the-option-type)
- [Rust medium dealing with option](https://medium.com/adventures-in-rust/deal-with-it-option-type-in-rust-4246e1dd9e47)
- [Rust by example unpack option ?](https://doc.rust-lang.org/rust-by-example/error/option_unwrap/question_mark.html)

## Using `std::option`

option expresses the possibility of absence

example function:

```rust
fn find_index(names: &[String], element: String) -> Option<usize> {
  for (i, name) in names.iter().enumerate() {
    if name == element {
      return Some(i);
    }
  }
  return None;
}
```

handle option:

```rust
match find_index(names, element) {
    Some(i) => println!("Name is at {}", i),
    None    => println!("Name is not found"),
}
```

## Idiomatic Option Handler

avoid using unwraps if you can

```rust
find_index(names, name_not_in_names).unwrap();
find_index(names, name_not_in_names).unwrap_or(0);
```

## Unwrap or else

- [Rust BurntSushi error handling](https://blog.burntsushi.net/rust-error-handling/)

```rust
fn main() {
    let args: Args = Docopt::new(USAGE)
                            .and_then(|d| d.decode())
                            .unwrap_or_else(|err| err.exit());

    for pop in search(&args.arg_data_path, &args.arg_city) {
        println!("{}, {}: {:?}", pop.city, pop.country, pop.count);
    }
}
```

## Ignore `Some` Value

```rust
match x {
  Some(_) => {},
  None => None
}
```

## Ignore `None` Value

```rust
match x {
  Some(y) => { *y },
  None => {}
}
```

## Unpack options

avoids match statements, just requires an Option return type

```rust
fn next_birthday(current_age: Option<u8>) -> Option<String> {
	// If `current_age` is `None`, this returns `None`.
	// If `current_age` is `Some`, the inner `u8` gets assigned to `next_age`
    let next_age: u8 = current_age? + 1;
    Some(format!("Next year I will be {}", next_age))
}
```

## Return early if Option::None

```rust
"my_first_string.my_second_string"
  .split('.')
  .nth(2)
  .ok_or_else(|| "failed to parse and retrieve string part".to_owned())?;
```
