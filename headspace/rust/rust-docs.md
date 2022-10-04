# RUST DOCS

## Resources

- [Rust Docs SO Unresolved Example](https://stackoverflow.com/questions/31638263/unresolved-import-in-documentation-example)

## Unresolved Import In Doc Example

rust is adding a main like so

```rust
fn main() {
   extern crate bignum;
   use bignum::inits::Zero;

   let a = bignum::BigNum::new(Zero::zero());
}
```
