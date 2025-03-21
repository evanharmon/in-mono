# KAFKA

## Resources

- [Kafka Docs](https://kafka.apache.org/documentation/)
- [Kafka is not a database guide from Materialize](https://materialize.com/blog/kafka-is-not-a-database/)

## Features
pub / sub streaming platform for real-time data
- `buffers` messages between producer and consumer systems
- offers decoupling between producer and consumer
- distributed / fault-tolerant system built for scaling out across nodes
- durable storage
- eventually consistent

## Limitations
- eventually consistent

## Storage
uses a write ahead log (WAL)
this helps if server crashes

## Producers / Publisher
produce the messages

## Subscribers / Consumers
clients subscribe to the messages
multiple consumers can form a `Consumer Group` for load-balancing and parallel data consumption

## Topics
messages are organized in to topics
topics can be divided in to partitions
