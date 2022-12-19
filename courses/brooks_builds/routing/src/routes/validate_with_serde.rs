use axum::Json;
use serde::Deserialize;

#[derive(Deserialize)]
pub struct RequestUser {
    username: String,
    password: String,
}

pub async fn validate_with_serde(Json(user): Json<RequestUser>) -> () {}
