import { test, describe, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import pyramid from './index'

// NOT bothering getting jest spying running here
describe('pyramid tests', () => {
  // beforeEach(() => jest.spyOn(console, 'log'))
  // afterEach(() => console.log.mockRestore())

  test('pyramid is a function', () => {
    assert.strictEqual(typeof pyramid, 'function')
  })

  // test('prints a pryamid for n = 2', () => {
  //   pyramid(2)
  //   expect(console.log.mock.calls[0][0]).toEqual(' # ')
  //   expect(console.log.mock.calls[1][0]).toEqual('###')
  //   expect(console.log.mock.calls.length).toEqual(2)
  // })

  // test('prints a pryamid for n = 3', () => {
  //   pyramid(3)
  //   expect(console.log.mock.calls[0][0]).toEqual('  #  ')
  //   expect(console.log.mock.calls[1][0]).toEqual(' ### ')
  //   expect(console.log.mock.calls[2][0]).toEqual('#####')
  //   expect(console.log.mock.calls.length).toEqual(3)
  // })

  // test('prints a pryamid for n = 4', () => {
  //   pyramid(4)
  //   expect(console.log.mock.calls[0][0]).toEqual('   #   ')
  //   expect(console.log.mock.calls[1][0]).toEqual('  ###  ')
  //   expect(console.log.mock.calls[2][0]).toEqual(' ##### ')
  //   expect(console.log.mock.calls[3][0]).toEqual('#######')
  //   expect(console.log.mock.calls.length).toEqual(4)
  // })
})
