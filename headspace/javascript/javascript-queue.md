# JAVASCRIPT QUEUE

making a custom `queue` data structure

## Features

- first in first out (FIFO)
- like a queue at the deli counter
- rudimentary queue without a ton of helpers
- good wrapper to protect against unwanted methods and unimplemented / dangerous functionality

## Limitations

- this is a reference data structure WITHOUT all the capabilities of `Array`

## Add

- end of the queue is the front, so add to start of array to ensure first stays at end

`this.data.unshift(record()`

## Remove

- remove first entry in queue which is at the end
  `return this.data.pop()`

## Peek

- view the first entry in queue which is at the end
  `return this.data[this.data.length - 1]`

## Example

```javascript
class Queue {
  constructor() {
    this.data = []
  }
  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}
```
