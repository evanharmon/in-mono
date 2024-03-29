# AWS APPSYNC AUTH

## Resources

- [AWS AppSync Security](https://docs.aws.amazon.com/appsync/latest/devguide/security.html)
- [AWS AppSync Authorization Use Cases](https://docs.aws.amazon.com/appsync/latest/devguide/security-authorization-use-cases.html)
- [AWS AppSync Resoure For Gotchas](https://www.integralist.co.uk/posts/cognito/#example-google-app-configuration)
- [AWS AppSync Multi Auth Examples Medium](https://medium.com/@ednergizer/multiple-authorization-methods-in-a-single-graphql-api-with-aws-appsync-security-at-the-data-7feeaa968486)
- [AWS AppSync UserId Conditional Update](https://forums.aws.amazon.com/thread.jspa?threadID=239939)
- [AWS AppSync GH Example Conditional Update](https://github.com/aws-samples/aws-appsync-chat/blob/master/amplify/backend/api/allamplifychatt/build/resolvers/Mutation.updateMessage.request)
- [AWS AppSync Cognito Scenarios](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html#scenario-appsync)
  Can be Cognito User Pool or Identity Pool
- [AWS AppSync Resource For Mobile Auth](https://www.integralist.co.uk/posts/cognito/#example-google-app-configuration)

## Schema Directives

#### Field Limits / Restrictions

```graphql
type User {
  ID: ID! @aws_cognito_user_pools
  FirstName: String!
  LastName: String!
}
```

#### Multi Auth Schema Example

```graphql
type S3Object @aws_iam @aws_cognito_user_pools {
  bucket: String!
  key: String!
  name: String!
  region: String!
}
```

#### Limit To Specific Cognito User Groups

NOTE: format is `cognito_groups` NOT `groups`
the below will allow field / query / mutation to be accessible to any user in the User Pool

```graphql
  getUser(id: ID!): User
    @aws_cognito_user_pools(groups: ["BAD BAD BAD"]) # this is wrong!
```

Format applies to fields, types as well

```graphql
type Query {
  getUser(id: ID!): User
    @aws_cognito_user_pools(cognito_groups: ["my-admin-group"])
}
```

## Best Practice On Returning Data

vtl code

```vtl
#if($context.result["Owner"] == $context.identity.sub)
    $utils.toJson($context.result);
#else
    $utils.unauthorized()
#end
```
