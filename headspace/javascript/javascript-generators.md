# JAVASCRIPT GENERATOR

## Resources

- [MDN Generator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [MDN Iterators and Generator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## Example

```javascript
function* generator(i) {
  yield i
  yield i + 10
}

const gen = generator(10)

console.log(gen.next().value)
// expected output: 10

console.log(gen.next().value)
// expected output: 20
```

## Class For Of Symbol Iterator

```javascript
class Node {
  constructor(data, next = null) {
    this.data = n
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}
```
