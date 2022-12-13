# RUST FOR LOOPS OWNERSHIP

## Container Access / Scope

_by default, container lifetime ends with for loop block_
Rust assumes that container is no longer needed and drops it from scope
To reuse a container after the block use a reference `&`

```rust
for item in container { }
// container lifetime ended
```

## Ownership Access

equivalent to `for item in IntoIterator::into_iter(collection)`

```rust
for item in container { }
// container lifetime ended
```

## Read-only Access

equivalent to `for item in collection.iter()`

```rust
for item in &collection { }
// collection still available
```

## Read-Write access

equivalent to `for item in collection.iter_mut()`

```rust
for item in &mut collection { }
// collection still available
```
