use axum::{
    http::{
        header::{ACCEPT, CONTENT_TYPE},
        Method,
    },
    routing::get,
    Router,
};
use tower_http::{cors, trace::TraceLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

use tracing::*;

#[tokio::main]
async fn main() {
    // NOTE: Loading environment variables
    //dotenv().ok();
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env().unwrap_or_else(|_| {
                format!(
                    "{}=debug,tower_http=info,axum::rejection=trace",
                    env!("CARGO_CRATE_NAME")
                )
                .into()
            }),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    let port = std::env::var("PORT").unwrap_or(String::from("2020"));

    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{port}"))
        .await
        .unwrap();

    debug!("Auth server running on 0.0.0.0:{port}");

    axum::serve(listener, app()).await.unwrap();
}

pub fn app() -> Router {
    let cors = cors::CorsLayer::new()
        .allow_origin(["http://localhost:5173".parse().unwrap()])
        .allow_credentials(true)
        .allow_methods([
            Method::GET,
            Method::POST,
            Method::PATCH,
            Method::DELETE,
            Method::POST,
        ])
        .allow_headers([ACCEPT, CONTENT_TYPE]);

    let api = Router::new()
        //.merge(admin_routes)
        //.merge(user_routes)
        // .route("/refresh", post(refresh))
        //.with_state(state)
        .layer(TraceLayer::new_for_http())
        .layer(cors);

    Router::new()
        .route("/", get(async || "hello"))
        //.nest("/admin", admin_pages)
        //.nest("/user", user_pages)
        .nest("/api", api)
    //.fallback_service(public_pages)
}
