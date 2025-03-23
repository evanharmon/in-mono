# DOCKER INSPECT CLI

## Features
inspects an image / layer

## Show config and history
`docker inspect -f '{{.Config}}{{range .Config.Cmd}}{{println}}{{end}}' my-image-name`

## Show default CMD
`docker inspect -f '{{.Config.Cmd}}' my-image-name`