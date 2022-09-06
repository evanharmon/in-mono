# CODE CHALLENGES QUEUE FROM STACKS

## Strategies

A new stack can be used to create a queue from another stack

`stack = [1,2,3]` when popped and pushed in to another stack becomes `[3,2,1]`

### Use two stacks

`stack1` and `stack2`

- `add`
  - // stack2 is queue, pop and push back to stack1 for stack representation
  - while stack2.peek() is not undefined, pop from stack2 and push to stack1
  - `stack1.push()` can now safely be used against stack1 stack representation
  - pop from s1 and push to s2 to move back to queue representation
- `remove` pops from stack2
- `peek` looks at end of stack2

### Algocast Two Stacks

`stack1` and `stack2`. Where as my solution re-ordered to Queue on `add()`,
the algocast solution re-orders on both `peek` and `remove`

- `add` push to stack1
- `remove`
  - while `stack1.peek()` has values, pop and push in to `stack2`
  - set `result` equal to `stack2.pop()`
  - while `stack2.peek()` has values, pop and push in to `stack1` to move back to stack format
  - return `result`
- `peek`
  - while `stack1.peek()` has values, pop and push to `stack2`
  - set `result` equal to `stack2.peek()`
  - while `stack2.peek()` has values, pop and push to `stack1` to move back to stack format
  - return `result`
