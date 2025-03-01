# DATABASE SHARDING

## Features
Scaling strategy, dividing a database into smaller shards spread out across multiple servers.
- different from replication which creates duplicate copies of data
- enhances scalability and performance
- used when hitting scalable ceilings or performance bottlenecks

## Best practices
- don't shard until it's totally needed!
- limit cross-shard transactions
- use sharding key that uniformly distributes data
- use consistent hashing
- implement monitoring for shard performance
- automate shard maintenance / rebalancing

## Downsides
- adding new features can take longer
- adds complexity
- can make code more difficult to maintain
- debugging can be tougher

## Alternatives
explore these first if suitable
- vertical scaling of nodes
- db / query optimization
- connection pooling
- read replicas
- caching
- data partitioning of tables within same database

## Horizontal sharding
splits a database by row. Data centric.
- each has the same schema but different data
- uses a sharding key or algorithm

### Example sharding keys
- user id
- gelocation
- data range
- category or tag
- hash of attribute
- combination of columns

## Vertical sharding
splits database across multiple columns or attributes. Table centric.
results in distinct databases, shard contains a subset of all data for the table

useful for heavily accessed tables so load can be reduced on single server

end result is multiple tables with more specialized info based on specific columns

### Example sharding

user data shard on small number of columns by
- job titles
- roles

shard by distinct categorical columns
- country
- product category

shard by numerical columns: ()
- user id
- order totals

### Implementation
- identify columns with diff characteristics / patterns
- determine which shards will be most active and scale
- cosider using a combo of horizontal AND vertical sharding
- be mindful of implications on query complexity, data consistency, and transactions