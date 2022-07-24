# AWS LAMBDA VERSIONS

## Resources

- [AWS Lambda Versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
- [AWS Lambda Alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)

## Versions

only $LATEST is mutable
all other versions are immutable because it's code and configuration

## Alias

good way to point to specific versions of lambda layers

## ID (Static)

every published version has an ID

## Qualifiers (Named Pointers)

You can move the qualifier around as 'prod'
default is \$LATEST

## Create Qualifier

Create Alias action
