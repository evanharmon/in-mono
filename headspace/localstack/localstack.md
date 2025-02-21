# LOCAL STACK

## Resources
- [Localstack install](https://docs.localstack.cloud/getting-started/installation/)
- [Docs](https://localstack.cloud/)
- [Localstack quickstart guide](https://docs.localstack.cloud/getting-started/quickstart/)
- [Github](https://github.com/localstack/localstack)
- [Customize Endpoing for Localstack](https://docs.aws.amazon.com/sdk-for-go/api/aws/endpoints/)

## INSTALL

### macOS
`brew install localstack/tap/localstack-cli`

### helm
run it in kubernetes
```bash
helm repo add localstack-repo https://helm.localstack.cloud
helm upgrade --install localstack localstack-repo/localstack
```

## Commands
requires docker to be running

### Run
```bash
localstack start
# or in background
localstack start -d
```