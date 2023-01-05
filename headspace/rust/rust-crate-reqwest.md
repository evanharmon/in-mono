# RUST CRATE REQWEST

## Resources

- [Rust crate reqwest](https://docs.rs/reqwest/latest/reqwest/)

## Features

- both async and blocking clients
- supports plain bodies, JSON, urlencoded, multipart
- customizable redirect policy
- HTTP proxies
- HTTPS via system-native TLS
- Cookie Store
- WASM

## Easy get request

```rust
let body = reqwest::get("https://www.rust-lang.org")
    .await?.text().await?;
println!("body = {:?}", body);
```

## Easy post request with JSON

```rust
// This will POST a body of `{"lang":"rust","body":"json"}`
let mut map = HashMap::new();
map.insert("lang", "rust");
map.insert("body", "json");

let client = reqwest::Client::new();
let res = client.post("http://httpbin.org/post")
    .json(&map).send().await?;
```
