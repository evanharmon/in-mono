# DOCKERFILE MOUNT TYPES EXPLAINED

```dockerfile
RUN --mount=type=cache,target=$WORKDIR_PATH/target \
    --mount=type=cache,target=$CARGO_GIT_DB_PATH \
    --mount=type=cache,target=$CARGO_REGISTRY_PATH \
    --mount=type=cache,target=$SCCACHE_DIR,sharing=locked \
    cargo build --locked --release --bins
```

These --mount=type=cache statements in the RUN command are part of BuildKit’s cache mounts feature in Docker. They allow you to persist and reuse files across builds without invalidating the entire layer when the contents of these directories change.

Here’s what each mount does:

1. --mount=type=cache,target=$WORKDIR_PATH/target
	•	Caches: The Rust build artifacts (target/ directory).
	•	Purpose: Rust’s cargo compiler places compiled binaries and intermediate build files in target/. This cache speeds up incremental builds since unchanged dependencies don’t need to be recompiled.
	•	Layer Rebuild? No, unless you change the Cargo.lock or Cargo.toml significantly.

2. --mount=type=cache,target=$CARGO_GIT_DB_PATH
	•	Caches: Git dependencies downloaded by Cargo.
	•	Purpose: If your project has dependencies sourced from Git (instead of crates.io), Cargo clones them into this directory.
	•	Layer Rebuild? No, unless a new dependency version is fetched.

3. --mount=type=cache,target=$CARGO_REGISTRY_PATH
	•	Caches: The local Cargo registry ($CARGO_HOME/registry).
	•	Purpose: Cargo downloads and extracts crates here before compiling them. This speeds up dependency resolution across builds.
	•	Layer Rebuild? No, unless Cargo downloads new dependencies.

4. --mount=type=cache,target=$SCCACHE_DIR,sharing=locked
	•	Caches: Compiler cache (sccache directory).
	•	Purpose: sccache (a caching compiler wrapper) caches compiled Rust artifacts across builds, speeding up compilation.
	•	Layer Rebuild? No, unless new compiled objects are needed.

⸻

What Gets Cached vs. What Gets Rebuilt?
	•	Cached and NOT Rebuilt (persistent across builds):
	•	Downloaded dependencies (Cargo Git and registry caches).
	•	Previously compiled objects (target directory and sccache cache).
	•	Rebuilt if changed:
	•	Source code changes.
	•	Cargo.lock or Cargo.toml modifications.
	•	A full clean (cargo clean) would reset some caches.

Why Use These Cache Mounts?
	•	Unlike normal Docker layers, these cache mounts persist across builds but don’t invalidate the entire layer when changed.
	•	They significantly speed up incremental Rust builds in Docker.
