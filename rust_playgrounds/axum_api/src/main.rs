use axum::{Router, routing::get};
use clap::Parser;
use log::info;

/// CLI arguments for running server
#[derive(Parser)]
struct CliArgs {
    /// port
    #[arg(default_value_t = 3000)]
    port: u16,
}

#[tokio::main]
async fn main() {
    // setup
    env_logger::init();
    let args = CliArgs::parse();

    // app routing
    let app = Router::new().route("/", get(|| async { "Success" }));

    // startup server
    let bind_addr = &format!("0.0.0.0:{}", args.port);
    let listener = tokio::net::TcpListener::bind(bind_addr).await.unwrap();
    info!("Listening on: {}", bind_addr);
    axum::serve(listener, app).await.unwrap();
}
