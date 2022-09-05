# JAVASCRIPT QUEUE

making a custom `queue` data structure

## Features

- first in first out (FIFO)
- rudimentary queue without a ton of helpers
- good wrapper to protect against unwanted methods and unimplemented / dangerous functionality

## Limitations

- this is a reference data structure WITHOUT all the capabilities of `Array`

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
