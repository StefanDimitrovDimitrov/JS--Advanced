const { expect, assert } = require('chai');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('charLookup', () => {
    it('', () => {  
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));
    });
    
    it('', () => {
        assert.equal(lookupChar('abv', -1), "Incorrect index");
        assert.equal(lookupChar('abv', 4), "Incorrect index");

    });

    it('', () => {
        assert.equal(lookupChar('abv', 0), 'a');
        assert.equal(lookupChar('abv', 2), 'v');

    });

})

describe('charLookup', () => {
    it('', () => {
        expect(lookupChar(1, 1)).to.be.undefined
        expect(lookupChar('abc', 1.2)).to.be.undefined
        expect(lookupChar('abc', 'a')).to.be.undefined
    });
    
    it('', () => {
        expect(lookupChar('abv', -1)).equal("Incorrect index")
        expect(lookupChar('abv', 4)).equal("Incorrect index")
    });
    it('', () => {
        expect(lookupChar('abv', 0)).equal("a")
        expect(lookupChar('abv', 2)).equal("v")
    });

})