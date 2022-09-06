# JAVASCRIPT STACK

making a custom `stack` data structure

## Features

- last in first out (LIFO)
- like a stack of library books

## Limitations

- this is a reference data structure WITHOUT all the capabilities of `Array`

## Push

- like a stack of library books, add to top and pushes down on other library books

`

## Pop

- pop the book on top of the library books off and take it

`this.data.push(record)`

## Peek

- whats the book on top of the library books stack?

`return this.data[this.data.length - 1]` - at end of array

## Example

```javascript
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
```
