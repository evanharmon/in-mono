import test from 'node:test'
import assert from 'node:assert/strict'
import longestCommonPrefix from './index.js'

test('2 string array should return `anti` prefix', () => {
  const result = longestCommonPrefix(['antiquated', 'antilope'])
  assert.deepStrictEqual(result, 'anti')
})

test('3 string array should return `anti` prefix', () => {
  const result = longestCommonPrefix(['antiquated', 'antilope', 'antibiotic'])
  assert.deepStrictEqual(result, 'anti')
})
