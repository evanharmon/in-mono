# RUST CRATE SERDE JSON DESERIALIZE_WITH

## Resources

- [Rust playground serde deserialize_with](https://play.integer32.com/?version=stable&mode=debug&edition=2018&gist=d1b67fae798e958b377c622fd009de14)

## Features

- avoids the need to litter structs with `Option<T>`

## Deserialize null value

handle null values in json

```rust
extern crate serde;
#[macro_use] extern crate serde_derive;
extern crate serde_json;

use serde::{Deserialize, Deserializer};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Element {
    #[serde(deserialize_with = "deserialize_null_default")]
    value: String,
}

fn deserialize_null_default<'de, D, T>(deserializer: D) -> Result<T, D::Error>
where
    T: Default + Deserialize<'de>,
    D: Deserializer<'de>,
{
    let opt = Option::deserialize(deserializer)?;
    Ok(opt.unwrap_or_default())
}

fn main() {
    let e: Element = serde_json::from_str(r#"{"value": null}"#).unwrap();
    assert_eq!(e.value, "");

    let e: Element = serde_json::from_str(r#"{"value": "foo"}"#).unwrap();
    assert_eq!(e.value, "foo")
}
```
