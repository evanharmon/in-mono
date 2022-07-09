# AWS DYNAMODB ITEMS AND ATTRIBUTES

## Resources

- [AWS DynamoDB Docs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [AWS DynamoDB Item Sizes and Formats](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CapacityUnitCalculations.html)
- [AWS DynamoDB Item TTLs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)
- [AWS DynamoDB Atomic Counters](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.AtomicCounters)

## Scalar Attribute Family Type

Types: String, Number, Binary, Boolean

## Set Attribute Family Type

Sets of Scalar types
Types: String Set, Number Set, Binary Set (set of scalar types)
All of the same data type
unordered set of data - order is not preserved

## Document Attribute Family Type

Types: List, Map
List (ordered Array), supports diff types just like an array like strings, bool, number, etc
Map (think JSON)

## Atomic Counters

are NOT idempotent, use when data can accept some margin of error
