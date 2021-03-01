const { expect, assert } = require('chai');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
//If the passed parameter 
//is NOT a string return undefined. 
//If the parameter is a string return either "even" or "odd" based on the length of the string.
describe ('check isOffOrEven', () => {
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message a==a')
    })
    it('Is even', () => {
        assert.equal(isOddOrEven('aa'),'even')
    })
    it('Is odd', () => {
        assert.equal(isOddOrEven('a'),'odd')
    })
})

describe ('check isOffOrEven', () => {
    it('Type is string', () => {
        expect(isOddOrEven(1)).to.be.undefined
    })
    it('Is even', () => {
        expect(isOddOrEven('aa')).to.equal('even')
    })
    it('Is odd', () => {
        expect(isOddOrEven('aaa')).to.equal('odd')
    })
})
