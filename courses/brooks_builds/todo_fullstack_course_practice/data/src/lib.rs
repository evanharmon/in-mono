mod create_task;
mod database;

use axum::{body::Body, routing::post, Extension, Router};
use create_task::create_task;
use sea_orm::{Database, DatabaseConnection};

fn create_routes_with_db(db_conn: DatabaseConnection) -> Router<Body> {
    Router::new()
        .route("/tasks", post(create_task))
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
