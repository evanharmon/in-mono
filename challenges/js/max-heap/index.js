// adapted from https://stackabuse.com/heap-sort-in-javascript/

/* Max Heap Visualization
[45, 12, 8, 7, 3]
        45
    12      8
  7  3
*/

class MaxHeap {
  constructor() {
    this.heap = []
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  leftChildIndex(index) {
    return 2 * index + 1
  }
  rightChildIndex(index) {
    return 2 * index + 2
  }
  swap(a, b) {
    let temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }
  insert(item) {
    // append new item to end - bottom right most node
    this.heap.push(item)
    // set index to bottom of tree - end of array
    let index = this.heap.length - 1
    // set first parent index
    let parentIndex = this.parentIndex(index)
    // traverse down tree and swap where necessary
    // while parent node exists and less than index node
    while (
      this.heap[parentIndex] &&
      this.heap[parentIndex] < this.heap[index]
    ) {
      this.swap(parentIndex, index)
      // swap
      // decrement to move up tree
      // make index the parent index
      index = this.parentIndex(index)
      // re-calculate the parent index
      parentIndex = this.parentIndex(index)
    }
  }
  // should only allow delete from root
  delete() {
    const item = this.heap.shift()
    if (this.heap.length === 0) return item

    this.heap.unshift(this.heap.pop())
    let index = 0
    let leftChildIndex = this.leftChildIndex(index)
    let rightChildIndex = this.rightChildIndex(index)
    while (
      (this.heap[leftChildIndex] &&
        this.heap[leftChildIndex] > this.heap[index]) ||
      (this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] > this.heap[index])
    ) {
      let max = leftChildIndex
      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      )
        max = rightChildIndex
      this.swap(max, index)
      index = max
      leftChildIndex = this.leftChildIndex(max)
      rightChildIndex = this.rightChildIndex(max)
    }
    return item
  }
}

// DEBUGGING
// const getMaxArray = () => [50, 43, 38, 22, 39, 27, 1, 3, 12]
// const mh = new MaxHeap()
// for (const item of getMaxArray()) mh.insert(item)
// mh.delete()

export default MaxHeap
