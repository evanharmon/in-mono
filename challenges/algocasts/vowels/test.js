import test from 'node:test'
import assert from 'node:assert/strict'
import vowels from './index'

test('Vowels is a function', () => {
  assert.strictEqual(typeof vowels, 'function')
})

test('returns the number of vowels used', () => {
  assert.strictEqual(vowels('aeiou'), 5)
})

test('returns the number of vowels used when they are capitalized', () => {
  assert.strictEqual(vowels('AEIOU'), 5)
})

test('returns the number of vowels used', () => {
  assert.strictEqual(vowels('abcdefghijklmnopqrstuvwxyz'), 5)
})

test('returns the number of vowels used', () => {
  assert.strictEqual(vowels('bcdfghjkl'), 0)
})
