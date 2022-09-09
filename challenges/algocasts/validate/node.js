// rewrite Node class for BST from scratch for practice
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
  insert(data) {
    // values LESS than this.data go LEFT
    // values GREATER than this.data go RIGHT
    if (data < this.data && this.left) return this.left.insert(data)
    else if (data < this.data) this.left = new Node(data)
    else if (data > this.data && this.right) return this.right.insert(data)
    else if (data > this.data) this.right = new Node(data)
  }
  contains(data) {
    // simpler recursion so tackle base case first
    if (this.data === data) return this

    if (this.data < data && this.right) return this.right.contains(data)
    else if (this.data > data && this.left) return this.left.contains(data)
    else return null
  }
}

export default Node
