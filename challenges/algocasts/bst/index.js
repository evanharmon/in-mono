// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/bst
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// algocast solution
// class Node {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
//   insert(data) {
//     if (data < this.data && this.left) this.left.insert(data)
//     else if (data < this.data) this.left = new Node(data)
//     else if (data > this.data && this.right) this.right.insert(data)
//     else if (data > this.data) this.right = new Node(data)
//   }
//   contains(data) {
//     // using recursion, so handle base case first
//     if (this.data === data) return this

//     if (this.data < data && this.right) return this.right.contains(data)
//     else if (this.data > data && this.left) return this.left.contains(data)
//     else return null
//   }
// }

// attempt 2
// rewrite 1 for practice
// class Node {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
//   insert(data) {
//     // main concepts
//     // - handle data less than this.data
//     // - handle data greater than this.data
//     if (data < this.data && this.left) this.left.insert(data)
//     else if (data < this.data) this.left = new Node(data)
//     else if (data > this.data && this.right) this.right.insert(data)
//     else if (data > this.data) this.right = new Node(data)
//   }
//   contains(data) {
//     if (this.data === data) return this

//     if (this.data < data && this.right) return this.right.contains(data)
//     else if (this.data > data && this.left) return this.left.contains(data)
//     else return null
//   }
// }

// attempt 3
// re-write again for practice
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
  insert(data) {
    // LEFT nodes for less than current value
    // RIGHT nodes for greater than current value
    // don't overwrite nodes - recurse to that node until spot free
    if (data < this.data && this.left) this.left.insert(data)
    else if (data < this.data) this.left = new Node(data)
    else if (data > this.data && this.right) this.right.insert(data)
    else if (data > this.data) this.right = new Node(data)
  }
  contains(data) {
    if (this.data === data) return this

    if (this.data < data && this.right) return this.right.contains(data)
    else if (this.data > data && this.left) return this.left.contains(data)
    else return null
  }
}

// debugging
// const node = new Node(10)
// node.insert(5)
// node.insert(15)
// node.insert(17)
// console.log(node.left.data, node.right.data, node.right.right.data) // 5 15 17

export default Node
