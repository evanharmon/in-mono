# AWS APPSYNC SCHEMA CONNECTIONS

## Resources

- [AWS AppSync Configuring Resolvers](https://docs.aws.amazon.com/appsync/latest/devguide/configuring-resolvers.html)

## Returning Multiple Items Via Connection

this will be a dynamodb type `query`, this way an overloaded sortkey and
begins_with() can be used
original query resolver result fields like ID will be available in
`context.source`
