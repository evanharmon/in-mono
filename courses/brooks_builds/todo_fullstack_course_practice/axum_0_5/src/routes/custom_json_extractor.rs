use axum::body::HttpBody;
use axum::extract::{FromRequest, RequestParts};
use axum::http::StatusCode;
use axum::{async_trait, BoxError, Json};
use serde::Deserialize;
use validator::Validate;

#[derive(Deserialize, Debug, Validate)]
pub struct RequestUser {
    #[validate(email(message = "must be a valid email."))]
    pub username: String,
    #[validate(length(min=8, message = "must be at least 8 characters."))]
    pub password: String,
}

#[async_trait]
impl<B> FromRequest<B> for RequestUser
where
    B: HttpBody + Send,
    B::Data: Send,
    B::Error: Into<BoxError>,
{
    type Rejection = (StatusCode, String);

    async fn from_request(request: &mut RequestParts<B>) -> Result<Self, Self::Rejection> {
        let Json(user) = request
            .extract::<Json<RequestUser>>()
            .await
            .map_err(|error| (StatusCode::BAD_REQUEST, format!("{}", error)))?;
        if let Err(errors) = user.validate() {
            return Err((StatusCode::BAD_REQUEST, format!("{}", errors)));
        };

        Ok(user)
    }
}
pub async fn custom_json_extractor(user: RequestUser) {
    dbg!(user);
}
