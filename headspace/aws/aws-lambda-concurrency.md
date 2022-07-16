# AWS LAMBDA CONCURRENCY

## Resources

- [AWS Lambda Reserved Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html)
- [AWS Lambda Provisioned Concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html)

## Features

- by default, single lambda can use up all concurrency up to account limit

## Limitations

- provisioned concurrency counts towards reserved concurrency

## Reserved Concurrency

- limit the scaling of the lambda to a maximum concurrency
- no additional charges for using reserved concurrency

## Provisioned Concurrency

- pre-initializes specified number of lambdas
- great to reduce latency
- additional charges as lambdas stay provisioned
