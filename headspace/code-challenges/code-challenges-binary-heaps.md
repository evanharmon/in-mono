# CODE CHALLENGES BINARY HEAPS

## Resources

- [Javascript Binary Heap and Priority Queues](https://www.digitalocean.com/community/tutorials/js-binary-heaps)

## Features

- balanced, every new node added left to right
- often use arrays for storage
- come in the form of `min` or `max` ordering
- comparison and organization only between parents and children
- binary tree with level order traversal

## Limitations

- DOES NOT compare and organize across siblings like a binary search tree

## Array as storage

- left children of node n found at position `2n + 1`
- right children of node n found at position `2n + 2`
- parent of node n found at `Math.floor(n - 1 / 2)`

```
/* Max Heap Visualization
[45, 12, 8, 7, 3]
        45
    12      8
  7  3
*/
```
