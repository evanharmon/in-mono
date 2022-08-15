# AWS APPSYNC SCHEMA

## Refactoring

### Review Schema Use

- Web Apps
- Mobile Clients
- Server / Internal Clients
- Pipelines
- Type properties used by recursive calls

### Notify Clients

clients should review:

- customized / non-auto generated queries
- rerun code generation

### Deleting Properties

- deprecate

Internal only API:

- review all codebases for parsing of type property - breaking change
- delete after deprecated

### Subscriptions

#### ERROR Invalid Output Type

- [AWS Amplify AppSync Github Issue](https://github.com/aws-amplify/amplify-js/issues/2257)
  subscriptions must return the same output type as the mutation

Contrived example

```gql
type Item {
  id: ID!
  description: String
}

type Note {
  id: ID!
  content: String
}

type Subscription {
  subscribeToNewItem(id: ID!): Item @aws_subscribe(mutations: ["createNote"])
}
```
