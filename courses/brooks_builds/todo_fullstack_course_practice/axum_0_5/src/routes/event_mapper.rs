use axum::http::StatusCode;
use axum::response::{IntoResponse, Response};
use serde::Deserialize;

use crate::EVENT_MAP;

#[derive(Debug, Deserialize)]
pub struct RequestEvent {
    pub event: String,
}

pub async fn event_mapper(body: String) -> Response {
    let request_event: RequestEvent = match serde_json::from_str(&body) {
        Ok(v) => v,
        Err(_e) => return (StatusCode::BAD_REQUEST, "bad request_event").into_response(),
    };

    let event = request_event.event.as_str();
    let mapped_event = match EVENT_MAP.get(event) {
        Some(v) => v,
        None => return (StatusCode::BAD_REQUEST, "bad request shape").into_response(),
    };

    dbg!(mapped_event);
    (StatusCode::OK, mapped_event.to_owned()).into_response()
}
