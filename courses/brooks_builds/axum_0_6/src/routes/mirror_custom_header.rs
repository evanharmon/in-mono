use axum::http::HeaderMap;

pub async fn mirror_custom_header(headers: HeaderMap) -> String {
    match headers
        .get("x-message")
        .and_then(|header| header.to_str().ok())
    {
        Some(v) => v.to_string(),
        None => return "x-message header not found".to_owned(),
    }
}
