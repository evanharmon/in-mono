# SYSTEM DESIGN SCALABILITY CACHE

## Features
in-memory caches. quicker reads and writes to KV store

## Best practices

### Application logic
app should query CACHE first instead of DB

## Storage techniques

### Cache database queries
result of db query is stored in cache. Has painful limitations

cache key: hashed version of query

issues:
- expiration
- one piece of data changing require deleting query and re-caching

### Cache objects
instead store the object in the cache

benefits:
- supports async processing
- workers pre-assemble objects
- avoids almost ever having to touch db

limitations:
- wouldn't there be a latency / cache objects would be eventually-consistent?

examples:
- user sessions
- fully rendered blog articles
- activity streams
- user <-> friend relationships