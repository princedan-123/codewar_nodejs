const assert = require('assert')
const solution = require('../multiples.js')
const { describe, it } = require('node:test')

describe('testing the solution function', 
    it('testing positive numbers', () => {
        assert.strictEqual(solution(10), 23)
        assert.strictEqual(solution(100),  2318)
        assert.strictEqual(solution(20), 78)
    }),
    it('testing negative numbers', () => {
        assert.strictEqual(solution(-50), 0,'function did not return 0')
        assert.strictEqual(solution(-1), 0, 'function did not return 0')
    }),
    it('testing zero', () => {
        assert.strictEqual(solution(0), 0, 'the solution function does not return zero')
    })
)