// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/stack
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
class Stack {
  constructor() {
    this.data = []
  }

  push(record) {
    this.data.push(record)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

// debugging
// add debugger statement in function body or use breakpoint
// from terminal, run `node inspect index.js`
// uncomment direct function call below
// const s = new Stack()
// s.push(1)
// s.push(2)
// s.peek() // returns 2
// s.pop() // returns 2
// s.pop() // returns 1

export default Stack
