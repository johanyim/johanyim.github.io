use axum::{
    http::StatusCode,
    routing::{get, get_service, post},
    Json, Router,
};
use lettre::{transport::smtp::authentication::Credentials, Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};
use tower_http::{services::ServeDir, trace::TraceLayer};
mod error;

use error::*;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env().unwrap_or_else(|_| {
                // axum logs rejections from built-in extractors with the `axum::rejection`
                // target, at `TRACE` level. `axum::rejection=trace` enables showing those events
                format!(
                    "{}=debug,tower_http=debug,axum::rejection=trace",
                    env!("CARGO_CRATE_NAME")
                )
                .into()
            }),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Serve the SvelteKit build directory
    let app = Router::new()
        .route("/email", post(email))
        .fallback_service(ServeDir::new("../frontend/build"))
        .layer(TraceLayer::new_for_http())
        // .nest("/api", api_routes())
     ;

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    axum::serve(listener, app).await.unwrap();
}

#[derive(Debug, Deserialize, Serialize)]
struct Email {
    email: String,
    subject: String,
    message: String,
}

async fn email(Json(body): Json<Email>) -> Result<(), AppError> {
    let username = String::from("johanjyyim@gmail.com");
    let password = String::from("xzil jcgy paah thhe");

    let creds = Credentials::new(username, password);
    let mailer = SmtpTransport::starttls_relay("smtp.googlemail.com")
        .unwrap()
        .port(587)
        .credentials(creds)
        .build();

    let email = Message::builder()
        .from("johanjyyim@gmail.com".parse().unwrap())
        .to("johanjyyim@gmail.com".parse().unwrap())
        .subject(body.subject)
        .body(format!(
            r#"
{}
                        "#,
            body.message
        ))
        .unwrap();

    let _ = mailer.send(&email)?;
    Ok(())
}
