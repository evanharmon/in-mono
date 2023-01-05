#[macro_use]
extern crate lazy_static;

pub mod routes;

use std::collections::HashMap;
use routes::create_routes;


// downside here is lazy_static static ref has to be declared at root of crate
lazy_static! {
    static ref EVENT_MAP: HashMap<&'static str, &'static str> = {
        let mut m = HashMap::new();
        m.insert("company.user.created", "user_created");
        m
    };
}

pub async fn run() {
    let app = create_routes();

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
