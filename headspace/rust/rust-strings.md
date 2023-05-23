# RUST STRINGS

## Copy `&str`

```rust
let new_filename = filename.clone();
```

## Create Byte String Shorthand

```rust
b"RIFF"
```

## Compare Buffer of Bytes as String Shorthand

```rust
assert_eq!(&buffer, b"RIFF");
```

## Create `&str` from String

```rust
"Hello World".to_owned();
```

## Split string

```rust
"MyFirstString.MySecondString"
  .to_owned()
  .split('.')
  .nth(1)
  .ok_or_else(|| Err("failed to parse string in to parts".to_owned()))?;
```
