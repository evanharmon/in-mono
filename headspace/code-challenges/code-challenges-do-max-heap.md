# CODE CHALLENGES DO MAX HEAP

## Resources

- [Javascript Binary Heap and Priority Queues](https://www.digitalocean.com/community/tutorials/js-binary-heaps)

## Storage

Heap is often stored in an array. This necessitates reordering the heap on add / remove to maintain rules of parent / children locations.

parent located at `Math.floor(idx - 1 / 2)`
left child at `2 * idx + 1`
right child at `2 * idx + 2`

## Class

```js
class MaxHeap {
  constructor() {
    this.values = []
  }
}
```

## Add

`add(element)`

Element is pushed to end of array and declared as `current`.
New element is bubbled up as necessary

steps:

- push new element to end of array
- set `index` to length of array - 1
- set `current` to array[index] which is new element pushed to array
- while index > 0, iterate over array in reverse

  - set `parentIndex` to `Math.floor((index - 1) / 2)`
  - set `parent` to array[parentIndex]
  - if `parent` is <= `current`
    - swap array[parentIndex] to equal `current`
    - swap array[index] to equal `parent`
    - set `index` equal to `parentIndex` to decrement
  - else break because new `current` value has finished bubbling up

  ## Extract Max

  `extractMax()`

Element is popped off end of array and returned at end of function.
End item of array is popped and off placed at front of array. Heap is reordered to move lower values to the bottom as necessary

steps:

- set return `max` value to array[0] which is top of heap
- pop end item from array and set to `end`
- set to array[0] to `end` as baseline for reordering heap
- set `index` equal to 0 to traverse heap top down
- set `length` equal to array.length
- set `current` equal to array[0]
- while (true), iterate over array
  - set `leftChildIndex` to `2 * index + 1`
  - set `rightChildIndex` to `2 * index + 2`
  - declare `leftChild` and `rightChild`
  - set `swap` to null
  - if left child exists `leftChildIndex < length`
    - set `leftChild` to array[leftChildIndex]
    - if `leftChild` > current
      - set `swap` to `leftChildIndex`
  - if right child exists `rightChildIndex < length`
    - set `rightChild` to array[rightChildIndex]
    - `// only swap right if larger than leftChild`
    - if swap is null and rightChild > current OR
      if swap not null and rightChild > leftChild
      - set `swap` to `rightChildIndex`
  - if swap is null then break without swapping
  - set array[index] to swap value array[swap]
  - set array[swap] to `current`
  - set `index` equal to `swap` to increment iterator
  - return `max`
