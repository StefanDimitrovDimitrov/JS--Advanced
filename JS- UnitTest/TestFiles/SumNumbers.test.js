const { expect, assert } = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

//Take an array of numbers as argument
//Return the sum of the values of all elements inside the array

describe('Sum numbers', () => {
    it(`sums single number`, () => {
        expect(sum([1])).to.equal(1);
    });

    // Test overloading
    it('sums multiple numbers', () => {
        expect(sum([1, 1])).to.equal(2);
    });

    it('sums different numbers', () => {
        expect(sum([2, 3, 4])).to.equal(9)
    });

});

describe('Sum numbers', () => {
    it(`sums single number`, () => {
        assert.equal(sum([1]),1)
    });

    // Test overloading
    it('sums multiple numbers', () => {
        assert.equal(sum([1, 1]),2)
    });

    it('sums different numbers', () => {
        assert.equal(sum([2, 3, 4]),9)
    });

});