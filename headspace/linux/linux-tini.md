# LINUX TINI

## Resources
- [Github tini](https://github.com/krallin/tini)
- [Tini on distroless images example](https://github.com/developer-guy/tini-and-distroless-poc)

## Features
init for containers
- ensures default signal handlers work, ex. rust..
- protects against zombie processes
- tini is actually included in docker with the `--init` flag

## Usage
see the docker boilerplates folder for additional examples

```dockerfile
FROM base AS builder
# Set the TINI_VERSION environment variable
ENV TINI_VERSION=v0.19.0
# Download the tini-static binary
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini

FROM gcr.io/distroless/cc-debian12 AS final
# Still need tini for proper signal handling
COPY --from=builder /usr/local/bin/tini /usr/local/bin/tini
# Correctly handle default signal handlers
ENTRYPOINT ["/usr/local/bin/tini", "--"]
```
