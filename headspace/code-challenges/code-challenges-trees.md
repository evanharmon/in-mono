# CODE CHALLENGES TREES

## Features

- parent / child relationship
- every node has `data` area and `children` array

## Node Class

- handles connection to next node

```javascript
class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }
  add(data) {
    this.children.push(new Node(data))
  }
  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}
```

## Tree Class

- add / remove don't make as much sense on Tree class so in Node class

## Breadth First Traversal Strategies

good for hierarchy searches
use whenever you see `width` type questions

- starts at top and iterate left to right per children level
- ignores sibling relationships

### Algocast array

`traverseBF(fn)`

- create `arr` containing `this.root`
- while `arr` has a length
  - make a copy of first array `node` via `shift()`
  - push `node` children back in to `arr`
  - call function with node as arg

## Depth First Traversal Strategies

tries to get to the bottom of the tree as quickly as possible

### Algocast array

`traverseDF(fn)`

- create `arr` containing `this.root`
- while `arr` has a length
  - make copy of first array `node` via `shift()`
  - add children back to front of `arr` with `unshift()`
  - call function with node as arg

## Level Width

## Algocast counters array with 'EOL' char

maintains two separate arrays `counters` and typical `arr` of traversal
`counters` array holds width value of each level in tree

- init `counters` array to zero with `counters.push(0)`
- init `arr` with root node
- push in to `arr` an end of line (EOL) char `s`
- while loop has more than one element `s` will always be there
  - remove first element from `arr` with `shift()`
  - if element is a node
    - add element's children to end of `arr` with `push()`
    - increment counter at end of `counters` array
  - otherwise element is EOL char
    - `push()` char back at end of `arr`
    - add new level counter=0 at end of `arr` with `push(0)`
- return `counters` array
