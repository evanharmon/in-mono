# DOCKERFILE MOUNTS

## Bind mounts read and write
BEWARE: local files would be edited!!!
default is read-only

```dockerfile
RUN --mount=type=bind,source=src,target=src,rw \
    --mount=type=bind,source=Cargo.toml,target=Cargo.toml,rw \
    --mount=type=bind,source=Cargo.lock,target=Cargo.lock,rw \
    --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo chef cook --release --recipe-path recipe.json
```