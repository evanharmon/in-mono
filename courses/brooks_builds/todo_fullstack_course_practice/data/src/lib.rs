mod create_task;
mod database;
mod get_tasks;
mod partial_update_tasks;
mod update_tasks;

use axum::{
    body::Body,
    routing::{get, patch, post, put},
    Extension, Router,
};
use sea_orm::{Database, DatabaseConnection};

use create_task::create_task;
use get_tasks::get_all_tasks;
use get_tasks::get_one_task;
use partial_update_tasks::partial_update;
use update_tasks::atomic_update;

fn create_routes_with_db(db_conn: DatabaseConnection) -> Router<Body> {
    Router::new()
        .route("/tasks", get(get_all_tasks))
        .route("/tasks", post(create_task))
        .route("/tasks/:id", get(get_one_task))
        .route("/tasks/:id", put(atomic_update))
        .route("/tasks/:id", patch(partial_update))
        .layer(Extension(db_conn))
}

// deviates from tutorial, using a cargo workspace and pulling from axum_0_5 path
pub async fn run(database_uri: &str) {
    let db_conn = Database::connect(database_uri)
        .await
        .unwrap_or_else(|_| panic!("Could not connect to database."));
    let app = create_routes_with_db(db_conn);

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
