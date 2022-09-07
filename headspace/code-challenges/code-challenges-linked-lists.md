# CODE CHALLENGES LINKED LISTS

## Features

- like a chain with links to the next chain
- order is always maintained
- every node has a `data` area
- everyone node has a `next` reference to next link in chain
- head node is at start
- tail node is at end and the `next` reference is null

## Node Class

- handles connection to next node

```javascript
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
```
