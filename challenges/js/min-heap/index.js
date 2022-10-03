// adapted from https://stackabuse.com/heap-sort-in-javascript/

/* Min Heap Visualization
[3, 7, 8, 12, 45]
        3
    7      8
  12  45 
*/

class MinHeap {
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
    const temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }
  insert(item) {
    // add new item to end of array
    this.heap.push(item)
    // use new element at end as index
    let index = this.heap.length - 1
    // traverse up tree and swap with parent where necessary
    let parentIndex = this.parentIndex(index)
    while (
      this.heap[parentIndex] &&
      this.heap[parentIndex] > this.heap[index]
    ) {
      this.swap(parentIndex, index)
      // adjust index and parentIndex to move up tree
      index = parentIndex
      parentIndex = this.parentIndex(index)
    }
  }
  delete() {
    // shift first element and save for return
    const item = this.heap.shift()
    if (this.heap.length === 0) return item
    // take last element and unshift to start of heap
    this.heap.unshift(this.heap.pop())
    // set index to start of heap for traversal
    let index = 0
    // set leftChildIndex and rightChildIndex pointers for looping
    let leftChildIndex = this.leftChildIndex(index)
    let rightChildIndex = this.rightChildIndex(index)

    // while loop conditional
    // leftChild exists AND leftChild is less than index element
    // OR rightChild exists and rightChild is less than index element
    while (
      (this.heap[leftChildIndex] &&
        this.heap[leftChildIndex] < this.heap[index]) ||
      (this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[index])
    ) {
      // set min and default to leftChildIndex
      let min = leftChildIndex
      // check to see if right child EXISTS and should be swapped instead of left
      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      )
        min = rightChildIndex

      // perform swap
      this.swap(min, index)
      // increment index and child pointers using new max to continue traversal
      index = min
      leftChildIndex = this.leftChildIndex(min)
      rightChildIndex = this.rightChildIndex(min)
    }
    return item
  }
}

// DEBUGGING
// const getMinArray = () => [50, 43, 38, 22, 39, 27, 1, 3, 12]
// const mh = new MinHeap()
// for (const item of getMinArray()) mh.insert(item)
// mh.delete()
// const sortedArr = Array.from({ length: mh.heap.length }, () => mh.delete())
// console.log(sortedArr)

export default MinHeap
