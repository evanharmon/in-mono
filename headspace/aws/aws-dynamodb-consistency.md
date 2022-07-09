# AWS DYNAMODB CONSISTENCY

## Resources

- [AWS DynamoDB read consistency](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html)

## Features

- writes are processed in the order in which they are received

## Eventual Consistent Reads Model

Consistency across all copies of data is usually reached within a second.
Repeating a read after a short time should return the updated data.
(Best Read Performance)

## Strongly Consistent Reads Model

Consistent read returns a result that reflects all writes that received a
successful response prior to the read
