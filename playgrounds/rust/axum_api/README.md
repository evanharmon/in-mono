# AXUM_API PLAYGROUND

## Docker images
`Dockerfile` is meant for production and runs in a distroless container
`Dockerfile.development` is for dev and has a shell

## Commands
default is to use the production / distroless container.
You can switch to the dev container if you want

### Build image
`docker build -t evanharmon/axum_api .`

### Run locally
`cargo run -- --allow-hostname localhost`

### Run container
```bash
docker run -i --name axum_api -p 3000:3000 --rm evanharmon/axum_api axum_api \
  --allow-hostname localhost
```

### Run compose
```bash
# Build and watch
docker-compose up --build --watch
# Teardown
docker-compose down
```

### Curl api
`curl localhost:3000/`
