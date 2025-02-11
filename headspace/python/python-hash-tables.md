# PYTHON HASH TABLES / MAPS

## Features
Uses an array combined with hash function
- index contains a bucket with key / value pair
- similar to hash sets that store tuples of key / value pair

python's version is diciontaries! Collisions are handled for you.

## Hashing function
takes input and generates an index
- responsible for uniformly distributing across the table

## Collisions
collisons happen when the hash function generates the same index for different keys.

strategies to handle them:
- chain: append to new key / value pair to linked-list of existing index / bucket
- open address: find another free slot / index and assign key / value to it

## Complexity
O(1) constant time for insert / delete / retrieve
worst case is O(n) with an inefficient table on # of keys to an index