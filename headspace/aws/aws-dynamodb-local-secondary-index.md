# AWS DYNAMODB LOCAL SECONDARY INDEX

## Resources

- [AWS DynamoDB Local Secondary Index](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html)

## Features

- allow an alternative sort key to be used
- max total size of elements is 10GB per partition key value

## Limitations

- must be specified at table creation
- SAME partition key, different sort key

## Composite Keys

- hash key and sort key
- two items can then have same partition key
- sorting by partition key / sort key
