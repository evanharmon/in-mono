# RUST CRATE SERDE JSON

## Resources

- [Rust crate serde json](https://crates.io/crates/serde)
- [Rust crate serde transform json object to serde structs](https://transform.tools/json-to-rust-serde)
- [Rust crate serde default value](https://serde.rs/attr-default.html)
- [Rust crate serde camcelcase](https://serde.rs/attr-default.html)

## Features

- rust has no built in lib for JSON. Serde is most popular
- serialize a struct to a string
- deserialize a string to a struct

## Basic example of serialize / deserialize

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 1, y: 2 };
    // Convert the Point to a JSON string.
    let serialized = serde_json::to_string(&point).unwrap();
    println!("serialized = {}", serialized); // Prints serialized = {"x":1,"y":2}
    // Convert the JSON string back to a Point.
    let deserialized: Point = serde_json::from_str(&serialized).unwrap();
    println!("deserialized = {:?}", deserialized); // Prints deserialized = Point { x: 1, y: 2 }
```

## Create json from string

```rust
let e: Element = serde_json::from_str(r#"{"value": null}"#).unwrap();
assert_eq!(e.value, "");
```

or

```rust
let json = r#"
    [
        {
        "resource": "/users"
        },
        {
        "timeout": 5,
        "priority": "High"
        }
    ]
"#;
```

## Serialize as camelCase

```rust
use serde::Serialize;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct Person {
    first_name: String,
    last_name: String,
}

fn main() {
    let person = Person { first_name: "Graydon".to_string(), last_name: "Hoare".to_string(), };
    let json = serde_json::to_string_pretty(&person).unwrap();
    println!("{}", json); // Prints: { "firstName": "Graydon", "lastName": "Hoare" }
}
```

## Set default for missing properties on deserialize

useful when deserializing a request body in to a struct

```rust
use serde::Deserialize;

#[derive(Debug, Default, Deserialize)]
#[serde(default, rename_all = "camelCase")]
struct Person {
    first_name: String,
    middle_name: String,
    last_name: String,
}

fn main() {
    let json = r#"{ "firstName": "Evan", "lastName": "H" }"#;
    let request: Person = serde_json::from_str(&json).unwrap();
    println!("{:?}", request);
}
```
