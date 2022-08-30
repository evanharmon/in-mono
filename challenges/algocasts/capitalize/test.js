import test from 'node:test'
import assert from 'node:assert/strict'
import capitalize from './index'

test('function capitalize exists', () => {
  assert.strictEqual(typeof capitalize, 'function')
})

test('capitalizes the first letter of every word in a sentence', () => {
  assert.strictEqual(
    capitalize('hi there, how is it going?'),
    'Hi There, How Is It Going?',
  )
})

test('capitalizes the first letter', () => {
  assert.strictEqual(
    capitalize('i love breakfast at bill miller bbq'),
    'I Love Breakfast At Bill Miller Bbq',
  )
})
