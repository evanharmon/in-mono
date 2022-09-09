# CODE CHALLENGES BINARY SEARCH TREES (BST)

## Features

- sorted
- children referred to as `left` or `right`
- parent referred to as `key` or `value` or `data`

## Common Interview Questons

- how to add new nodes
- how to validate a binary search tree

## Requirements

- max # of children is 2
- must be sorted
- left node value always less than parent
- left node value always less than root
- right node value always greater than parent
- right node value always greater than root

## Common Cases

- current node is full with nodes attached left and right
- reached bottom of tree

## Strategies

## Algocast insert with recursion

think of this way:

- new values LESS than node HAVE to go to the left
- new values GREATER than node MUST go to the right

if value LESS than left node, assign to left node if empty, otherwise you must traverse the left node
if value GREATER than right node, assign to right node if empty, otherwise traverse the right node

big nested if / else if block to compare four pieces of info

- is new node less than current node?
- is new node greater than current node?
- does node.left exist?
- does node.right exist?

pseudocode:

- if new node less than current node AND node.left exists
  - recurse `node.left.insert(data)`
- else if new node less than current node
  - assign node.left to new node
- if new node greater than current node AND node.right exists
  - recurse `node.right.insert(data)`
- if new node greater than current node
  - assign node.right to new node

## Algocast contains with recursion

`contains(data)`

simpler recursion so remember to do base case first

- if node value equals data
  - return node
- if node value LESS than data AND node.right exists
  - recurse `node.right.contains(data)`
- if node value GREATER than data AND node.left exists
  - recurse `node.left.contains(data)`
- else return null

## Algocast validate with recursion

`validate(node, min = null, max = null)`

maintains `min` and `max` and set defaults to null

the base cases below are ok to reason about
max is null when examing right nodes, so node.data should be less than max
min is null when examining left nodes, so node.data should be greater than min

- if max is not null AND node is GREATER than max return false
- if min is not null AND node is LESS than min return false

the recursion is TOUGH to grasp

- if node.left exists AND validate(node.left, min, node.data) is not true
  - return false
- if node.right exists AND validate(node.right, node.data, max) is not true

  - return false

- otherwise return true from function as valid BST
