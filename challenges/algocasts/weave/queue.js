class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    // prepend to maintain FIFO order
    this.data.unshift(record)
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  remove() {
    return this.data.pop()
  }
}

export default Queue
