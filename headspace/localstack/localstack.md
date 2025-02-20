# LOCAL STACK

## Resources

- [Docs](https://localstack.cloud/)
- [Github](https://github.com/localstack/localstack)
- [Customize Endpoing for Localstack](https://docs.aws.amazon.com/sdk-for-go/api/aws/endpoints/)

## INSTALL

Installation involves git cloning and running docker-compose up to pull images

```console
git clone https://github.com/localstack/localstack.git $HOME/code
cd $HOME/code/localstack
TMPDIR=/private$TMPDIR docker-compose up
```
