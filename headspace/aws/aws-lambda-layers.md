# AWS LAMBDA LAYERS

## Resources

- [AWS Lambda Layers Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)

## Features

- can use AWS published layers or AWS customer layers
- include code not part of deployment package such as libs, etc
- support resource based policies

## Limitations

- included as part of the max 250 MB deployment size limit for lambdas
- lambda function can use up to 5 layers
