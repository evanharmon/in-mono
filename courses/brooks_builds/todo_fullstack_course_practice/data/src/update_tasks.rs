use axum::Json;
use axum::http::StatusCode;
use axum::{Extension, extract::Path};
use sea_orm::{DatabaseConnection, ColumnTrait, EntityTrait, QueryFilter, prelude::DateTimeWithTimeZone, Set};
use serde::Deserialize;

use crate::database::tasks;
use crate::database::tasks::Entity as Tasks;

// atomic update but id must stay the same
#[derive(Deserialize)]
pub struct RequestTask {
    pub id: Option<i32>,
    pub priority: Option<String>,
    pub title: String,
    pub completed_at: Option<DateTimeWithTimeZone>,
    pub description: Option<String>,
    pub deleted_at: Option<DateTimeWithTimeZone>,
    pub user_id: Option<i32>,
    pub is_default: Option<bool>,
}

// this is a pretty lame example because any missing options will then set a field to NULL
pub async fn atomic_update(
    Path(id): Path<i32>,
    Extension(db_conn): Extension<DatabaseConnection>,
    Json(request_task): Json<RequestTask>,
    ) -> Result<(), StatusCode> {
    let update_task = tasks::ActiveModel {
       id: Set(id),
       priority: Set(request_task.priority),
       title: Set(request_task.title),
       completed_at: Set(request_task.completed_at),
       description: Set(request_task.description),
       deleted_at: Set(request_task.deleted_at),
       user_id: Set(request_task.user_id),
       is_default: Set(request_task.is_default),
    };

    Tasks::update(update_task)
        .filter(tasks::Column::Id.eq(id))
        .exec(&db_conn)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(())
}
