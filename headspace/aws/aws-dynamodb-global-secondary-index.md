# AWS DYNAMODB GLOBAL SECONDARY INDEX

## Resources

- [AWS DynamoDB Global Secondary Index](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html)
- [AWS DynamoDB Create, Monitor, and Optimize GSI](https://aws.amazon.com/premiumsupport/knowledge-center/create-gsi-dynamodb/)

## Features

- can be added at table creation or later
- supports non-unique attributes
- different partition / sort key

## Limitations

- up to 5 of each per table

## Composite Keys

- hash key and sort key
- two items can then have same partition key
- sorting by partition key / sort key

## Monitor GSI Creation

Cloudwatch metrics, search for `OnlineIndexPercentageProgress` and graph it
