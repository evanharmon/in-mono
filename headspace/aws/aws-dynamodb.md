# AWS DYNAMODB

NoSQL database managed service similar to Cassandra

## Resources

- [AWS DynamoDB Docs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [AWS DynamoDB Hash / Range Keys](https://stackoverflow.com/questions/29178855/what-is-the-use-of-a-hash-range-in-a-dynamodb-table)
- [AWS DynamoDB Medium TimeHop Dynamodb Strategies](https://www.timehop.com/news/2018/5/25/one-year-of-dynamodb-at-timehop)
- [AWS DynamoDB NAB Tech Design Patterns](https://medium.com/@nabtechblog/advanced-design-patterns-for-amazon-dynamodb-354f97c96c2)
- [AWS DynanmoDB Blog Priority Queueing](https://aws.amazon.com/blogs/database/implementing-priority-queueing-with-amazon-dynamodb/)

## Features

- stored on SSD
- spread across 3 geographically distinct data centres
- supports migration from Apache Cassandra

## Limitations

- 400KB item size limit

## DynamoDB Structure

```
- Table
  - Items (Think Row)
    - Attributes (one or more - can be different)
      - Hash / Partition Key (Primary Index)
      - Range / Sort Key (Think Composite Key like timeseries data is stored)
```
