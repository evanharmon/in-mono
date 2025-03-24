# syntax=docker/dockerfile:1
################################################################################
# not a production example - just a playground
# Build the app, leveraging:
# - downloaded dependencies cache mount at /usr/local/cargo/registry 
# - git repo dependencies cache at /usr/local/cargo/git/db
# - compiled dependences cache at /usr/src/$APP_NAME/target
# - using RUN --mount for cache but requires mounting in each stage

ARG RUST_VERSION=1.84
ARG APP_NAME=axum_api
ARG CARGO_GIT_DB_PATH=/usr/local/cargo/git/db
ARG CARGO_REGISTRY_PATH=/usr/local/cargo/registry
ARG WORKDIR_PATH=/usr/src/app

################################################################################
# Build stage
# SECURITY: would be a SHA normally
FROM rust:${RUST_VERSION} AS base

RUN cargo install sccache --version 0.9.1
RUN cargo install cargo-chef --version 0.1.71
ENV RUSTC_WRAPPER=sccache SCCACHE_DIR=/sccache

FROM base AS planner
ARG CARGO_GIT_DB_PATH
ARG CARGO_REGISTRY_PATH
ARG WORKDIR_PATH

WORKDIR $WORKDIR_PATH
COPY Cargo.toml Cargo.lock ./
COPY src/ src/
RUN --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef prepare --recipe-path recipe.json

FROM base AS builder
ARG CARGO_GIT_DB_PATH
ARG CARGO_REGISTRY_PATH
ARG WORKDIR_PATH

WORKDIR $WORKDIR_PATH
COPY --from=planner $WORKDIR_PATH/recipe.json recipe.json
RUN --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json
COPY Cargo.toml Cargo.lock ./
COPY src/ src/
RUN --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo build --locked --release --bins

################################################################################
# Runtime - non-distroless now for development
# SECURITY: would be a distroless sha image as well for final stage

# SECURITY: would be a SHA normally
FROM debian:bookworm-slim AS dev
ARG APP_NAME
ARG WORKDIR_PATH

# Install only runtime dependencies
RUN apt update && apt install -y --no-install-recommends \
    ca-certificates tini \
    && apt clean && rm -rf /var/lib/apt/lists/*

# Copy the binary from builder
COPY --from=builder $WORKDIR_PATH/target/release/$APP_NAME /usr/local/bin/

# Create a non-root user
RUN useradd \
    --system \
    --no-create-home \
    --home-dir /nonexistent \
    --shell /sbin/nologin \
    app

# Run the container as the app user
USER app

# Correctly handle default signal handlers
ENTRYPOINT ["/usr/bin/tini", "--"]
