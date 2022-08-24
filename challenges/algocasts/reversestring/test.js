import test from 'node:test'
import assert from 'node:assert/strict'
import reverse from './index'

test('Reverse function exists', () => {
  assert.doesNotThrow(() => reverse(''))
})

test('Reverse reverses a string', () => {
  const res = reverse('abcd')
  assert.equal(res, 'dcba')
})

test('Reverse reverses a string', () => {
  const res = reverse('  abcd')
  assert.equal(res, 'dcba  ')
})
