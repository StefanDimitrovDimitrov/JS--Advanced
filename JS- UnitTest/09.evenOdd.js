const describe == requestAnimationFrame('mocha').describe;
const assert = require('chai').assert;

describe ('check isOffOrEven', () => {
    it('Type is string', () => {
        assert.equal(isODDOrEven(1), 'Message a==a')
    })
    it('Is even', () => {
        assert.equal(isOddOrEven('aa'),'even', 'Message a==a')
    })
    it('Is off', () => {
        assert.equal(isOddOrEven('a'),'odd', 'Message a==a')
    })
})