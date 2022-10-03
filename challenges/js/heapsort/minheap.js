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
  insert(element) {
    // insert new element at end of heap array
    this.heap.push(element)
    // set new element as index
    let index = this.heap.length - 1
    // track parent for comparison
    let parentIndex = this.parentIndex(index)
    // compare new element against parent
    // bubble up and swap as necessary
    while (
      this.heap[parentIndex] &&
      this.heap[parentIndex] > this.heap[index]
    ) {
      this.swap(parentIndex, index)
      // adjust index and parentIndex for continued traversal
      index = parentIndex
      parentIndex = this.parentIndex(index)
    }
  }
  delete() {
    // shift first element out and save for returning
    const item = this.heap.shift()
    if (this.heap.length === 0) return item

    // pop off last element and unshift to start of heap array
    this.heap.unshift(this.heap.pop())
    // set index for top down traversal / sink down to bottom
    let index = 0
    // track leftChildIndex and rightChildIndex for looping
    let leftChildIndex = this.leftChildIndex(index)
    let rightChildIndex = this.rightChildIndex(index)

    // while loop conditional, remember to check:
    // leftChild and rightchild existence
    // each child less than parent and needs to swap
    while (
      (this.heap[leftChildIndex] &&
        this.heap[leftChildIndex] < this.heap[index]) ||
      (this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[index])
    ) {
      // set min default for swap to leftChild
      let min = leftChildIndex
      // check if right child should be swapped instead
      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      )
        min = rightChildIndex
      // perform swap
      this.swap(min, index)
      // adjust index to min, recalculate child indexes using new min
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
