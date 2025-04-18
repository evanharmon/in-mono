# syntax=docker/dockerfile:1
################################################################################
# not a production example - just a playground
# Build the app, leveraging:
# - downloaded dependencies cache mount at /usr/local/cargo/registry 
# - git repo dependencies cache at /usr/local/cargo/git/db
# - compiled dependences cache at /usr/src/$APP_NAME/target
# - using RUN --mount to avoid copy but requires mounting in each build stage
# - ALWAYS copy target to an output directory before cache mount is unmounted!

ARG RUST_VERSION=1.84
ARG APP_NAME=axum_api
ARG BUILD_OUTPUT_PATH=/tmp
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
RUN --mount=type=bind,source=src,target=src \
    --mount=type=bind,source=Cargo.toml,target=Cargo.toml \
    --mount=type=bind,source=Cargo.lock,target=Cargo.lock \
    --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef prepare --recipe-path recipe.json

FROM base AS builder
ARG APP_NAME
ARG BUILD_OUTPUT_PATH
ARG CARGO_GIT_DB_PATH
ARG CARGO_REGISTRY_PATH
ARG WORKDIR_PATH

WORKDIR $WORKDIR_PATH
# Note(evan): Chef cook only needs recipe - no code files
COPY --from=planner $WORKDIR_PATH/recipe.json recipe.json
RUN --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json

# Make sure to copy build binary out before unmount
RUN --mount=type=bind,source=src,target=src \
    --mount=type=bind,source=Cargo.toml,target=Cargo.toml \
    --mount=type=bind,source=Cargo.lock,target=Cargo.lock \
    --mount=type=cache,target=$WORKDIR_PATH/target \
    --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo build --locked --release --bins && \
    cp ./target/release/$APP_NAME $BUILD_OUTPUT_PATH/$APP_NAME

# Set the TINI_VERSION environment variable
ENV TINI_VERSION=v0.19.0

# Download the tini-static binary
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini

################################################################################
# Runtime - distroless for security
# SECURITY: minimal, non-root distroless image for final stage

# SECURITY: would be a SHA normally
FROM gcr.io/distroless/cc-debian12 AS final
ARG APP_NAME
ARG BUILD_OUTPUT_PATH

# Still need tini for proper signal handling
COPY --from=builder /usr/local/bin/tini /usr/local/bin/tini

# Copy the binary from builder
COPY --from=builder $BUILD_OUTPUT_PATH/$APP_NAME /usr/local/bin/$APP_NAME

# Distroless default user is non-root
USER nonroot:nonroot

# Correctly handle default signal handlers
ENTRYPOINT ["/usr/local/bin/tini", "--"]
