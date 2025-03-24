# not a production example - just a playground
# SECURITY: would be a SHA normally
FROM rust:1.84-slim-bookworm AS base
RUN cargo install cargo-chef --version 0.1.71

FROM base AS planner
WORKDIR /usr/src/app
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM base AS builder
WORKDIR /usr/src/app
COPY --from=planner /usr/src/app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
# SECURITY: would be a more explicit copy
COPY . .
RUN cargo build --release --bins

# Runtime - non-distroless now for development
# SECURITY: would be a SHA normally
FROM debian:bookworm-slim

# Install only runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates tini \
    && rm -rf /var/lib/apt/lists/*

# Copy the binary from builder
COPY --from=builder /usr/src/app/target/release/axum_api /usr/local/bin/

# Create a non-root user
RUN useradd -m -s /bin/bash app

# Run the container as the app user
USER app
WORKDIR /home/app

# Correctly handle default signal handlers
ENTRYPOINT ["/usr/bin/tini", "--" ]

# SECURITY: would be a distroless sha image as well for final stage
CMD ["axum_api"]