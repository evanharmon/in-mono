class Stack {
  constructor() {
    this.data = []
  }

  push(record) {
    // push to end of array (top of stack of books)
    this.data.push(record)
  }

  pop() {
    // pop book off end of array (top of stack of books)
    return this.data.pop()
  }

  peek() {
    // peek at end of array (top of stack of books)
    return this.data[this.data.length - 1]
  }
}

export default Stack
