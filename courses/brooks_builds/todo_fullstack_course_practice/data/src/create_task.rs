use axum::{Extension, Json};
use sea_orm::{DatabaseConnection, Set, ActiveModelTrait};
use serde::Deserialize;

use crate::database::tasks;

#[derive(Deserialize)]
pub struct RequestTask {
    title: String,
    description: Option<String>,
    priority: Option<String>,
}

pub async fn create_task(Extension(db_conn): Extension<DatabaseConnection>, Json(request_task): Json<RequestTask>) {
    let new_task = tasks::ActiveModel {
        priority: Set(request_task.priority),
        title: Set(request_task.title),
        description: Set(request_task.description),
        ..Default::default()
    };
    let result = new_task.save(&db_conn).await.unwrap();
    dbg!(result);
}
