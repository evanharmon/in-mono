# CODE CHALLENGES MAX HEAP

## Resources

- [Stackabuse Javascript Max Heap and Heapsort](https://stackabuse.com/heap-sort-in-javascript/)

## Storage

Heap is often stored in an array. This necessitates reordering the heap on add / remove to maintain rules of parent / children locations.

## Class with helpers

```js
class MaxHeap {
  constructor() {
    this.heap = []
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  leftChild(index) {
    return 2 * index + 1
  }
  rightChild(index) {
    return 2 * index + 2
  }
}
```

## `Insert(element)`

Element is pushed to end of array. New element is bubbled up as necessary

steps:

- append new element to end of array
- mark last element (the new element just added) as index
- get parent index of last element
- while parent element exists and is less than index element
  - swap parent element and index element

## `Delete()`

Element is popped off end of array and returned at end of function.
End item of array is popped and off placed at front of array.
Heap is reordered to move lower values to the bottom as necessary

steps:

- set `item` return value using `shift()`
- return `item` early if heap array now empty
- pop last element off heap and add to front of heap array via `unshift()`
- set `index` to 0
- set pointers for `leftChildIndex` and `rightChildIndex`
- while leftChild exists and leftChild less than index element
  OR rightChild exists and rightChild greater than index element
  - set `max` to `leftChildIndex` as default for swap
  - if rightChild exists AND rightChild greater than leftChild
    - set `max` to `rightChildIndex` for swap
  - swap `max` and `index` elements
  - increment `index` by setting to new `max` value
  - increment `leftChildIndex` equal to `this.leftChildIndex(max)`
  - increment `rightChildIndex` equal to `this.rightChildIndex(max)`
- return `item`
