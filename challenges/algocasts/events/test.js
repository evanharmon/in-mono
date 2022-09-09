import test from 'node:test'
import assert from 'node:assert/strict'
import Events from './index.js'

test('Events can be registered then triggered', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb = () => {}
  const callsfunc = tracker.calls(cb, 1)

  events.on('click', callsfunc)
  events.trigger('click')

  assert.strictEqual(tracker.getCalls(callsfunc).length, 1)
})

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

test('Events can be triggered multiple times', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb1 = tracker.calls(() => 1, 3)
  const cb2 = tracker.calls(() => 2, 2)

  events.on('click', cb1)
  events.trigger('click')
  events.on('click', cb2)
  events.trigger('click')
  events.trigger('click')

  assert.strictEqual(tracker.getCalls(cb1).length, 3)
  assert.strictEqual(tracker.getCalls(cb2).length, 2)
})

test('Events can have different names', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb1 = tracker.calls(() => 1, 2)
  const cb2 = tracker.calls(() => 2, 1)

  events.on('click', cb1)
  events.trigger('click')
  events.on('hover', cb2)
  events.trigger('click')
  events.trigger('hover')

  assert.strictEqual(tracker.getCalls(cb1).length, 2)
  assert.strictEqual(tracker.getCalls(cb2).length, 1)
})

test('Events can be toggled off', () => {
  const events = new Events()
  const tracker = new assert.CallTracker()
  const cb1 = tracker.calls(() => 1, 1)
  const cb2 = tracker.calls(() => 2, 1)

  events.on('hover', cb2)
  events.on('click', cb1)
  events.trigger('click')
  events.off('click')
  events.trigger('click')
  events.trigger('hover')

  assert.strictEqual(tracker.getCalls(cb1).length, 1)
  assert.strictEqual(tracker.getCalls(cb2).length, 1)
})
