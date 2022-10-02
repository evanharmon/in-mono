// adapted from https://www.digitalocean.com/community/tutorials/js-binary-heaps

/* Max Heap Visualization
[45, 12, 8, 7, 3]
        45
    12      8
  7  3
*/

/* Min Heap Visualization
[3, 7, 8, 12, 45]
        3
    7      8
  12  45 
*/

// attempt 1
// tutorial solution
// class MaxHeap {
//   constructor() {
//     this.values = []
//   }
//   getParentIndex(idx = 0) {
//     if (idx < 1) return null

//     return Math.floor(idx / 2)
//   }
//   getLeftChildIndex(idx = 0) {
//     return 2 * idx + 1
//   }
//   getRightChildIndex(idx = 0) {
//     return 2 * idx + 2
//   }
//   add(value) {
//     // add
//     this.values.push(value)

//     // traverse in reverse and bubble up max values
//     let index = this.values.length - 1
//     const current = this.values[index]
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2)
//       const parent = this.values[parentIndex]

//       if (parent <= current) {
//         // swap since current is greater
//         this.values[parentIndex] = current
//         this.values[index] = parent
//         index = parentIndex
//       } else break
//     }
//   }
//   extractMax() {
//     // set max for return
//     // pop last and set to new max as baseline
//     const max = this.values[0]
//     const end = this.values.pop()
//     this.values[0] = end
//     // start at top
//     // compare and `sink down to bottom`
//     let index = 0
//     const length = this.values.length
//     const current = this.values[0]
//     while (true) {
//       let leftChildIndex = 2 * index + 1
//       let rightChildIndex = 2 * index + 2
//       let leftChild, rightChild
//       let swap = null
//       // compare children and set swap if necessary
//       if (leftChildIndex < length) {
//         leftChild = this.values[leftChildIndex]
//         if (leftChild > current) swap = leftChildIndex
//       }
//       if (rightChildIndex < length) {
//         rightChild = this.values[rightChildIndex]
//         // only swap largest child with parent
//         if (
//           (swap === null && rightChild > current) ||
//           (swap !== null && rightChild > leftChild)
//         )
//           swap = rightChildIndex
//       }
//       // perform swap
//       if (swap === null) break
//       this.values[index] = this.values[swap]
//       this.values[swap] = current
//       index = swap
//     }
//     return max
//   }
// }

// attempt 2
// re-write from scratch for practice
class MaxHeap {
  constructor(values = []) {
    this.values = values
  }
  getParentIndex(idx) {
    if (idx < 1) return 0
    return Math.floor((idx - 1) / 2)
  }
  getLeftChildIndex(idx) {
    return 2 * idx + 1
  }
  getRightChildIndex(idx) {
    return 2 * idx + 2
  }
  // NOTE: does not sort on insert
  add(element) {
    // add to end of array
    this.values.push(element)
    // bubble up new element as necessary
    let index = this.values.length - 1
    const current = this.values[index]
    while (index > 0) {
      // get parent
      let parentIndex = this.getParentIndex(index)
      let parent = this.values[parentIndex]
      // bubble up if new element greater, otherwise break and be done
      if (parent < current) {
        // swap
        this.values[parentIndex] = current
        this.values[index] = parent
        // decrement
        index = parentIndex
      } else break
    }
  }
  extractMax() {
    // retrieve max for return value
    const max = this.values[0]

    // pop last element, place at start of array for reordering
    const end = this.values.pop()
    this.values[0] = end

    // sink new max down to bottom as necessary
    let index = 0
    let length = this.values.length
    const current = this.values[index]
    // traverse array as tree and break when new max greater than children
    while (true) {
      // retrieve children indexes
      let leftChildIndex = this.getLeftChildIndex(index)
      let rightChildIndex = this.getRightChildIndex(index)
      // declare children for swap use later
      let leftChild, rightChild
      // set swap for use after comparisons
      let swap = null
      // compare current to left child
      // top down so remember to check for existence of children
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        // compare left child to parent for max
        if (leftChild > current) swap = leftChildIndex
      }
      // compare current to right child
      // remember to only bubble right child if less than left child
      if (rightChildIndex < length) {
        rightChild = this.values[rightChild]
        if (
          (swap === null && rightChild > current) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIndex
      }
      // perform swap if necessary, break if no swap necessary
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = current
      // increment index to
      index = swap
    }

    return max
  }
}

// DEBUGGING
// const mh = new MaxHeap()
// mh.add(12)
// mh.add(45)
// mh.add(7)
// mh.add(8)
// mh.add(3)
// console.log(mh.extractMax())

export default MaxHeap
