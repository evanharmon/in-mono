# NODE TEST RUNNER

## Resources

- [Node18 assert](https://nodejs.org/api/assert.html#assertequalactual-expected-message)

## truthy test

```javascript
const res = palindrome('aba')
assert.ok(res)
```

## strict

without `strict` `1 === '1'` is true

## does not throw

```javascript
const q = new Queue()
assert.doesNotThrow(() => {
  q.add(1)
  q.remove()
})
```

## Call Tracker / Mocks

equivalent to checking mocks on `jest.fn()`

```javascript
test('Events can be registered then triggered', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb = () => {}
  const callsfunc = tracker.calls(cb, 1)

  events.on('click', callsfunc)
  events.trigger('click')

  assert.deepStrictEqual(tracker.getCalls(callsfunc).length, 1)
})
```

## Track multiple calls

```javascript
test('Multiple events can be registered then triggered', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb1 = tracker.calls(() => 1, 1)
  const cb2 = tracker.calls(() => 2, 1)

  events.on('click', cb1)
  events.on('click', cb2)
  events.trigger('click')

  assert.strictEqual(tracker.getCalls(cb1).length, 1)
  assert.strictEqual(tracker.getCalls(cb2).length, 1)
})
```
