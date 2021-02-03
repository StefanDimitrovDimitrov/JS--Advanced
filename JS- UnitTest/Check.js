const {expect} = require('chai');
const isSymmetric = require('./isSymmetric');

describe('isSymmetric', () =>{

    it('return true for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.true;
    });

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    })

    it('returns false for invalid argument', () =>{
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns false for type checking', () =>{
        expect(isSymmetric(['1', 1])).to.be.false;
    });

    // test overloading
    it('return true for valid odd-element', () =>{
        expect(isSymmetric([1,1,1])).to.true
    })

    it('return true for valid symmetric input', () =>{
        expect(isSymmetric(['a','a'])).to.true
    })

    it('returns false for valid non-symmetric string array', () =>{
        expect(isSymmetric(['a', 'b'])).to.be.false;
    })
})