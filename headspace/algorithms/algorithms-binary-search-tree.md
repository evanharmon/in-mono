# ALGORITHMS - BINARY SEARCH TREE

## Features
- smallest value is found at the leftmost leaf

## Requirements
Sorted array

## Definition
- all nodes to left of a node have values less the value of the node
- all nodes to right of a node have values greater than the value of the
node

## Use cases
- unordered map
- algorithmic problem-solving

## Time complexity
h is the height of tree
this can degrade to O(n) when BST becomes unbalanced / skewed.
This can be helped by self-balancing BSTs.

### Insertion
worst case: O(h) 
best case: O(log n) - complete BST - height is log n

### Search
worst case: O(h) 
best case: O(log n) - complete BST - height is log n

### Deletion
need to search for node to be deleted first
worst case: O(h) 
best case: O(log n) - complete BST - height is log n

## Space complexity
recursive operations require auxiliary space on stack up to the height of the tree

worst case: O(h)
best case: O(log n) - fully balanced BST