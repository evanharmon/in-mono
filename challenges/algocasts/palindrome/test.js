import test from 'node:test'
import assert from 'node:assert/strict'
import palindrome from './index'

test('palindrome function is defined', () => {
  assert.equal(typeof palindrome, 'function')
})

test('"aba" is a palindrome', () => {
  const str = 'aba'
  const res = palindrome(str)
  assert.strictEqual(res, true)
})

test('"abcba" is a palindrome', () => {
  const str = 'aba'
  const res = palindrome(str)
  assert.strictEqual(res, true)
})

test('" aba" is not a palindrome', () => {
  const str = ' aba'
  const res = palindrome(str)
  assert.strictEqual(res, false)
})

test('"aba " is not a palindrome', () => {
  const str = 'aba '
  const res = palindrome(str)
  assert.strictEqual(res, false)
})

test('"greetings" is not a palindrome', () => {
  const str = 'greetings'
  const res = palindrome(str)
  assert.strictEqual(res, false)
})

test('"1000000001" a palindrome', () => {
  const str = '1000000001'
  const res = palindrome(str)
  assert.strictEqual(res, true)
})

test('"Fish hsif" is not a palindrome', () => {
  const str = 'Fish hsif'
  const res = palindrome(str)
  assert.strictEqual(res, false)
})

test('"fish hsif" is a palindrome', () => {
  const str = 'fish hsif'
  const res = palindrome(str)
  assert.strictEqual(res, true)
})

test('"pennep" a palindrome', () => {
  const str = 'pennep'
  const res = palindrome(str)
  assert.strictEqual(res, true)
})
