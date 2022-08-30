import test from 'node:test'
import assert from 'node:assert/strict'
import anagrams from './index'

test('function anagrams exists', () => {
  assert.strictEqual(typeof anagrams, 'function')
})

test('"hello" is an anagram of "llohe"', () => {
  assert.deepStrictEqual(anagrams('hello', 'llohe'), true)
})

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  assert.deepStrictEqual(anagrams('Whoa! Hi!', 'Hi! Whoa!'), true)
})

test('"One One" is not an anagram of "Two two two"', () => {
  assert.deepStrictEqual(anagrams('One One', 'Two two two'), false)
})

test('"One one" is not an anagram of "One one c"', () => {
  assert.deepStrictEqual(anagrams('One one', 'One one c'), false)
})

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  assert.deepStrictEqual(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'),
    false,
  )
})
