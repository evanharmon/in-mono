# AWS ELASTICACHE MEMCACHED

## Resources

- [AWS Elasticache Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html)
- [AWS Elasticache Comparing Memcached and Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html)
- [AWS Elasticache Pricing](https://aws.amazon.com/elasticache/pricing/)

### Concurrent Connections

if App is taking a long time to respond, check # that App is releasing
concurrent connections

## Features

- multi threaded

## Limitations

- encryption not supported
- NOT persistent
- no backup / restore

## Scaling / Evictions

set threshold to 90%
scale up with more memory and / or scale out with more nodes

## SwapUseage

- should be 0 most of time, should not exceed 50Mb
- if over 50Mb, increase memcached_connections_overhead param

## memcached_connections_overhead

- amount of memory reserved for memcached connections and other misc overhead
