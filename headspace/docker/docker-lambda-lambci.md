# DOCKER LAMBDA LAMBCI

## Resources

- [Docker Lambda LambCI Repo](https://github.com/lambci/docker-lambda)

## Echo / Send An Event To Lambda Function

```console
echo '{"some": "event"}' |\
  docker run \
    --rm \
    --mount type=bind,source="$PWD",target=/var/task \
    -i \
    -e DOCKER_LAMBDA_USE_STDIN=1 \
    lambci/lambda:nodejs8.10
```

## Send Large File Event To Lambda

```console
cat sample-api-gateway-request-event.json |\
docker run -mount type=bind,source="${PWD}",target=/go/src/github.com/my-go-project \
 -p 40000:40000 -i --rm --security-opt seccomp=unconfined \
 -e DOCKER_LAMBDA_USE_STDIN=1 lambci/lambda:build-go1.x \
 /go/src/github.com/my-go-project/bin/dlv debug \
   --headless \
   --listen=:40000 \
   --api-version=2 \
   /go/src/github.com/my-go-project/main.go
```
