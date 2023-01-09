use axum::http::StatusCode;
use axum::Json;
use axum::{extract::Path, Extension};
use sea_orm::{
    prelude::DateTimeWithTimeZone, ColumnTrait, DatabaseConnection, EntityTrait, IntoActiveModel,
    QueryFilter, Set,
};
use serde::Deserialize;

use crate::database::tasks;
use crate::database::tasks::ActiveModel;
use crate::database::tasks::Entity as Tasks;

// correctly handle every property on PATCH
#[derive(Deserialize)]
pub struct RequestTask {
    pub id: Option<i32>,
    #[serde(
        default,
        skip_serializing_if = "Option::is_none",
        with = "::serde_with::rust::double_option"
    )]
    pub priority: Option<Option<String>>,
    pub title: Option<String>,
    #[serde(
        default,
        skip_serializing_if = "Option::is_none",
        with = "::serde_with::rust::double_option"
    )]
    pub completed_at: Option<Option<DateTimeWithTimeZone>>,
    #[serde(
        default,
        skip_serializing_if = "Option::is_none",
        with = "::serde_with::rust::double_option"
    )]
    pub description: Option<Option<String>>,
    #[serde(
        default,
        skip_serializing_if = "Option::is_none",
        with = "::serde_with::rust::double_option"
    )]
    pub deleted_at: Option<Option<DateTimeWithTimeZone>>,
}

pub async fn partial_update(
    Path(id): Path<i32>,
    Extension(db_conn): Extension<DatabaseConnection>,
    Json(request_task): Json<RequestTask>,
) -> Result<(), StatusCode> {
    let mut db_task: ActiveModel = if let Some(task) = Tasks::find_by_id(id)
        .one(&db_conn)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
    {
        task.into_active_model()
    } else {
        return Err(StatusCode::NOT_FOUND);
    };

    if let Some(priority) = request_task.priority {
        // end user explicitly set the property
        db_task.priority = Set(priority);
    }

    if let Some(description) = request_task.description {
        db_task.description = Set(description);
    }

    if let Some(title) = request_task.title {
        db_task.title = Set(title);
    }

    if let Some(completed_at) = request_task.completed_at {
        db_task.completed_at = Set(completed_at);
    }

    if let Some(deleted_at) = request_task.deleted_at {
        db_task.deleted_at = Set(deleted_at);
    }

    Tasks::update(db_task)
        .filter(tasks::Column::Id.eq(id))
        .exec(&db_conn)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(())
}
