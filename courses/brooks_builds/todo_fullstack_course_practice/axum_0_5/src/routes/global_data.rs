use std::collections::HashMap;

use axum::{http::StatusCode, response::{Response, IntoResponse}, Json};
use once_cell::sync::Lazy;
use serde::Serialize;

static GLOBAL_DATA: Lazy<HashMap<&'static str, &'static str>> = Lazy::new(|| {
    let mut m = HashMap::new();
    m.insert("region", "us-east-1");
    m
});

#[derive(Debug, Serialize)]
struct RegionResponse {
    region: String,
}

#[derive(Debug, Serialize)]
struct ErrorResponse {
    message: String,
}

// gets a region. Pretty cool how the Response return type auto infers the Json type
pub async fn get_region() -> Response {
    //let key = "regionz"; // manually for playing around
    let key = "region";
    let region = if let Some(region) = GLOBAL_DATA.get(key) {
        region
    } else {
        let json = ErrorResponse { message: "server error".to_string() };
        return (StatusCode::INTERNAL_SERVER_ERROR, Json(json)).into_response();
    };
    let region_res = RegionResponse { region: region.to_string() };
    (StatusCode::OK, Json(region_res)).into_response()
}
