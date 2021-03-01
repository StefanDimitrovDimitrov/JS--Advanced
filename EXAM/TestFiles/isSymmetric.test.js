
const { expect, assert } = require('chai');
function isSymmetric(arr) {
    if(!Array.isArray(arr)){
        return false;
    }
    let reversed = arr.slice(0).reverse();
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}




describe('isSymmetric', () =>{
// •	Return true if the input array is symmetric
    it('1.return true for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.true;
        assert.isTrue(isSymmetric([1,1],true))
    });
// •	Otherwise, return false
    it('2.returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    })
// •	Return false for any input that isn’t of the correct type
    it('3.returns false for invalid argument', () =>{
        expect(isSymmetric('a')).to.be.false;
    });

    it('4.returns false for type checking', () =>{
        expect(isSymmetric(['1', 1])).to.be.false;
    });

    // test overloading
    it('5.return true for valid odd-element', () =>{
        expect(isSymmetric([1,1,1])).to.true
    })

    it('6.return true for valid symmetric input', () =>{
        expect(isSymmetric(['a','a'])).to.true
    })

    it('7.returns false for valid non-symmetric string array', () =>{
        expect(isSymmetric(['a', 'b'])).to.be.false;
    })
})

describe('isSymmetric', () =>{
        // •	Return true if the input array is symmetric
        it('1.return true for valid symmetric input - assert', () => {
            assert.isTrue(isSymmetric([1,1],true))
        });
        // •	Return false if the input array is not symmetric
        it('2.returns false for valid non-symmetric input - assert', () => {
            assert.isFalse(isSymmetric([1,2],false));
        });
        // •	Return false for any input that isn’t of the correct type
        it('3.returns false for invalid argument - assert', () =>{
        assert.isFalse(isSymmetric('a'),false)
        });

        it('4.returns false for type checking', () =>{
            assert.isFalse(isSymmetric(['1', 1],false));
        });
        // test overloading
        it('4.return true for valid odd-element - assert', () =>{
        assert.isTrue(isSymmetric([1,1,1],true))
        })
        it('5.return true for valid symmetric input - assert', () =>{
        assert.isTrue(isSymmetric(['a','a'],true))
        })
        it('6.returns false for valid non-symmetric string array - assert', () =>{
        assert.isFalse(isSymmetric(['a','b'],false))
        })  
})
