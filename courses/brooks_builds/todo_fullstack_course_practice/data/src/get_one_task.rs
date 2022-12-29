use axum::{extract::Path, Extension, http::StatusCode, Json};
use sea_orm::{DatabaseConnection, EntityTrait};
use serde::Serialize;

use crate::database::tasks::Entity as Tasks;

#[derive(Serialize)]
pub struct ResponseTask {
    id: i32,
    title: String,
    priority: Option<String>,
    description: Option<String>,
}

pub async fn get_one_task(Path(id): Path<i32>, Extension(db_conn): Extension<DatabaseConnection>) -> Result<Json<ResponseTask>, StatusCode> {
    let task = Tasks::find_by_id(id).one(&db_conn).await.unwrap();

    if let Some(task) = task {
        Ok(Json(ResponseTask {
            id: task.id,
            title: task.title,
            priority: task.priority,
            description: task.description,
        }))
    } else {
        Err(StatusCode::NOT_FOUND)
    }
}
