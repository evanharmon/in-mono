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

## Find Midpoint Strategies

### My Slow / Fast

works for even or odd number of nodes
ratio is `2:1` so can be used to find midpoint
`slow` variable moves ahead one node per iteration
`fast` variables moves ahead two nodes per iteration

even at end, `slow` will be left pointing to the node at the midpoint

- keep track of slow and fast node
- while loop over slow node
  - break early if `fast.next.next` does not exist
  - move `fast` ahead two nodes
  - move `slow` ahead one node
- return slow node as it will be at mid point

### Algocast Slow / Fast

works for even or odd number of nodes
ratio is `2:1` so can be used to find midpoint
`slow` variable moves ahead one node per iteration
`fast` variables moves ahead two nodes per iteration

even at end, `slow` will be left pointing to the node at the midpoint

- keep track of slow and fast node starting at head
- loop while fast.next && fast.next.next
  - advance slow to slow.next
  - advance fast to fast.next.next
- return slow

## Check if Circular Strategies

### Algocast Slow / Fast

use similar slow / fast technique. Eventually fast will catch up with slow if circular

- keep track of slow and fast node starting at head
- loop while fast.next && fast.next.next
  - advance slow to slow.next
  - advance fast to fast.next.next
  - check if slow === fast same object in memory, if yes, return true
- return false as loop was able to exit

## FromLast Strategies

`fromLast(list, n)`

### Algocast Slow / Fast

works by setting `fast` ahead by `n`, so when last is reached, `slow` is `n` back from end

initalize `slow` to head but do not increment
initalize `fast` to head

- loop over list
  - increment `fast` ahead by `n` on first iteration
  - increment `slow` and `fast` by 1
  - check if `fast` is pointing at last element
- return `slow`
