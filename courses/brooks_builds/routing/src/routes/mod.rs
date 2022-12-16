mod hello_world;
mod mirror_body_json;
mod mirror_body_string;
mod path_variables;
mod query_params;

use axum::{
    routing::{get, post},
    Router,
};
use hello_world::hello_world;
use mirror_body_json::mirror_body_json;
use mirror_body_string::mirror_body_string;
use path_variables::hard_coded_path;
use path_variables::path_variables;
use query_params::query_params;

// ordering doesn't matter - most exact route match wins
pub fn create_routes() -> Router {
    Router::new()
        .route("/", get(hello_world))
        .route("/mirror_body_string", post(mirror_body_string))
        .route("/mirror_body_json", post(mirror_body_json))
        .route("/path_variables/:id", get(path_variables))
        .route("/path_variables/15", get(hard_coded_path))
        .route("/query_params", get(query_params))
}
