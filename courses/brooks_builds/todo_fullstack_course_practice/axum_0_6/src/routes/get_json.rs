use axum::Json;
use serde::Serialize;

#[derive(Serialize)]
pub struct Data {
    username: String,
    count: i32,
    message: String,
}

pub async fn get_json() -> Json<Data> {
    let data = Data {
        username: "Evan".to_string(),
        count: 5,
        message: "Hello".to_string(),
    };
    Json(data)
}
