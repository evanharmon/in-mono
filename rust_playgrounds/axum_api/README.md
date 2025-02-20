# AXUM_API PLAYGROUND

## Commands

### Build image
`dokcer build -t evanharmon/axum_api .`

### Run container
`docker run -i --name axum_api -p 3000:3000 --rm evanharmon/axum_api`

### Curl api
`curl localhost:3000/`