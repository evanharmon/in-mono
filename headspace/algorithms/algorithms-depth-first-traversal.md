# ALGORITHMS - DEPTH FIRST TRAVERSAL

## Resources
- [Geeksforgeeks dft graph](http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

## Features
- uses stacks
- similar to preorder traversal
- uses less memory than bfs because it doesn't have to maintain the child
pointers at each level

## Use cases
when needing to start the bottom / deepest level of a tree

- finding a path
- detecting cycles (BFS is usually used though)
- traversal with memory constraints

## Edges
Tree edge: new vertex
Back edge: from descendent to ancestor
Forward edge: from ancestor to descendant
Cross edge: between a tree and sub trees

## Traversal
Boolean often good enough: visited / not visited
All vertex initially marked unvisited
