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

pub async fn get_all_tasks(Extension(db_conn): Extension<DatabaseConnection>) -> Result<Json<Vec<ResponseTask>>, StatusCode> {
    let tasks = Tasks::find()
        .all(&db_conn)
        .await
        .map_err(|_err| StatusCode::INTERNAL_SERVER_ERROR)?
        .into_iter()
        .map(|db_task| {
            ResponseTask {
                id: db_task.id,
                title: db_task.title,
                priority: db_task.priority,
                description: db_task.description
            }
          }
        )
        .collect();
    Ok(Json(tasks))
}
