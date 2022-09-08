// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/tree
// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

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

// attempt 1
// breadthFirstTraversal
// my solution with empty array and root node suggestion
// class Tree {
//   constructor() {
//     this.root = null
//   }
//   traverseBF(fn) {
//     // create array and place in root node
//     const arr = [this.root]
//     // while array has elements
//     while (arr.length > 0) {
//       // take out first element from array and place all it's children back in the array
//       const elem = arr.shift()
//       arr.push(...elem.children)
//       // call iterator function with first element then throw away first element
//       fn(elem)
//     }
//   }
//   traverseDF(fn) {
//     const arr = [this.root]
//     while (arr.length) {
//       const elem = arr.shift()
//       arr.unshift(...elem.children)
//       fn(elem)
//     }
//   }
// }

// algocast solution
class Tree {
  constructor() {
    this.root = null
  }
  traverseBF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()
      arr.push(...node.children)
      fn(node)
    }
  }
  traverseDF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()
      arr.unshift(...node.children)
      fn(node)
    }
  }
}

// debugging
// const letters = []
// const t = new Tree()
// t.root = new Node('a')
// t.root.add('b')
// t.root.add('c')
// t.root.children[0].add('d')
// t.traverseBF(node => letters.push(node.data))
// console.log(letters) // ['a', 'b', 'c', 'd']

// const letters = []
// const t = new Tree()
// t.root = new Node('a')
// t.root.add('b')
// t.root.add('d')
// t.root.children[0].add('c')
// t.traverseDF(node => letters.push(node.data))
// assert.deepStrictEqual(letters, ['a', 'b', 'c', 'd'])

export default Tree
export { Tree, Node }
