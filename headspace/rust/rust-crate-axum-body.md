# RUST AXUM BODY

## Copy Body for use in other functions

get body from request and clone for other functions

```rust
let body = Bytes::from_request(req, state)
    .await
    .map_err(|err| err.into_response())?;
do_thing_with_request_body(body.clone());
```

## Consume Body but pass on to handler

- [Rust axum consume body and pass on](https://github.com/tokio-rs/axum/blob/main/examples/consume-body-in-extractor-or-middleware/src/main.rs)

I think this allows the body to be consumed but still passed on to handler?
