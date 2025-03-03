use axum::{
    http::{header, HeaderValue, Method},
    routing::get,
    Router,
};
use clap::Parser;
use log::info;
use tower_http::cors::CorsLayer;

/// CLI arguments for running server
#[derive(Parser)]
struct CliArgs {
    /// CORS allowed hostname
    #[arg(long)]
    allow_hostname: String,
    /// port
    #[arg(long, default_value_t = 3000)]
    port: u16,
}

#[tokio::main]
async fn main() {
    // setup
    env_logger::init();
    let args = CliArgs::parse();

    // Cross-origin resource sharing (CORS)
    // only setup for local playgrounds for now - no https
    let origins = vec![
        format!("http://{}:{}", args.allow_hostname, args.port)
            .parse::<HeaderValue>()
            .unwrap(),
    ];
    let cors = CorsLayer::new()
        .allow_origin(origins)
        .allow_methods(vec![Method::GET, Method::OPTIONS])
        .allow_headers(vec![header::CONTENT_TYPE]);

    // app routing
    let app = Router::new()
        .layer(cors)
        .route("/", get(|| async { "Success" }));

    // startup server
    let bind_addr = &format!("0.0.0.0:{}", args.port);
    let listener = tokio::net::TcpListener::bind(bind_addr).await.unwrap();
    info!("Listening on: {}", bind_addr);
    axum::serve(listener, app).await.unwrap();
}
