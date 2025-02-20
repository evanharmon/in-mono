# RUST DOCKERFILE

## Resources

- [Depot guide to fast dockerbuilds with sccache](https://depot.dev/blog/rust-dockerfile-best-practices)

## Features
base build examples - see boilerplate folder for fuller examples running rust binaries

## Cargo-chef to cache third-party dependencies
limitations:
- any rust dependency changes will trigger rebuild of all dependencies

```dockerfile
FROM rust:1.84 AS base
RUN cargo install cargo-chef --version 0.1.71

FROM base AS planner
WORKDIR /usr/src/app
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM base AS builder
WORKDIR /usr/src/app
COPY --from=planner /usr/src/app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN cargo build --release --bins
```

## sccache with cargo-chef
use full base (non-slim) to avoid missing packages / openssl setup

```dockerfile
FROM rust:1.84 AS base
RUN cargo install sccache --version 0.9.1
RUN cargo install cargo-chef --version 0.1.71
ENV RUSTC_WRAPPER=sccache SCCACHE_DIR=/sccache

FROM base AS planner
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef prepare --recipe-path recipe.json

FROM base AS builder
WORKDIR /usr/src/app
COPY --from=planner /usr/src/app/recipe.json recipe.json
RUN --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo build --release --bins
```

## Cargo registry caching
```dockerfile
FROM rust:1.84 AS base
RUN cargo install sccache --version 0.9.1
RUN cargo install cargo-chef --version 0.1.71
ENV RUSTC_WRAPPER=sccache SCCACHE_DIR=/sccache

FROM base AS planner
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef prepare --recipe-path recipe.json

FROM base AS builder
WORKDIR /usr/src/app
COPY --from=planner /usr/src/app/recipe.json recipe.json
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo build --release --bins
```