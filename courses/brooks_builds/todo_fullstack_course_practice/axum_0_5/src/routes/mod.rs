mod get_json;
mod hello_world;
mod middleware_message;
mod mirror_body_json;
mod mirror_body_string;
mod mirror_custom_header;
mod mirror_user_agent;
mod path_variables;
mod query_params;
mod validate_with_serde;
mod custom_json_extractor;

use axum::{
    http::Method,
    routing::{get, post},
    Extension, Router,
};
use path_variables::hard_coded_path;
use path_variables::path_variables;
use query_params::query_params;
use tower_http::cors::{Any, CorsLayer};

use get_json::get_json;
use hello_world::hello_world;
use middleware_message::middleware_message;
use mirror_body_json::mirror_body_json;
use mirror_body_string::mirror_body_string;
use mirror_custom_header::mirror_custom_header;
use mirror_user_agent::mirror_user_agent;
use validate_with_serde::validate_with_serde;
use custom_json_extractor::custom_json_extractor;

#[derive(Clone)]
pub struct SharedData {
    pub message: String,
}

// ordering doesn't matter - most exact route match wins
pub fn create_routes() -> Router {
    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_origin(Any);
    let shared_data = SharedData {
        message: "I am shared state data.".to_owned(),
    };
    Router::new()
        .route("/", get(hello_world))
        .route("/mirror_body_string", post(mirror_body_string))
        .route("/mirror_body_json", post(mirror_body_json))
        .route("/path_variables/:id", get(path_variables))
        .route("/path_variables/15", get(hard_coded_path))
        .route("/query_params", get(query_params))
        .route("/mirror_user_agent", get(mirror_user_agent))
        .route("/mirror_custom_header", get(mirror_custom_header))
        .route("/get_json", get(get_json))
        .route("/middleware_message", get(middleware_message))
        .route("/validate_data", post(validate_with_serde))
        .route("/custom_json_extractor", post(custom_json_extractor)) // could not get to work on 0.6 so abandoned files
        .layer(cors)
        .layer(Extension(shared_data))
}
