use std::env;
use dotenvy::dotenv;
use data::run;

#[tokio::main]
async fn main() {
    dotenv().ok();
    let database_url = if let Ok(database_url) = env::var("DATABASE_URL") {
        database_url
    } else {
        panic!("database_url not set in env");
    };
    run(&database_url).await;
}
