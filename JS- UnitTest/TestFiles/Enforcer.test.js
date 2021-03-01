const { expect, assert } = require('chai');

// if // typeOf // return
// sum two Nums  => || operator

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer',()=>{

    describe("addFive", () =>{

        it('with invalid argument', () =>{

            actualResult = mathEnforcer.addFive([1,2,3,5]);
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, '');
        })

        it('with valid argument',()=>{
            actualResult = mathEnforcer.addFive(9);
            expectedResult = 14;

            assert.equal(actualResult, expectedResult, '');
        })
        it('with valid negative num',()=>{
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;

            assert.equal(actualResult, expectedResult, '');
        })
        it('with valid floating num',()=>{
            actualResult = mathEnforcer.addFive(-10.5);
            expectedResult = -5.5;

            assert.equal(actualResult, expectedResult, '');
        })
    })

    describe('subtract', () => {
        it('is not number',() => {
            assert.isUndefined(mathEnforcer.subtractTen("a"));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
        it('subtract properly',()=>{
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        })
    })
    describe('sum',()=>{
        it('number plus string', () =>{
            assert.isUndefined(mathEnforcer.sum('1',1));
            assert.isUndefined(mathEnforcer.sum(1,'1'));
        })
        it('numbers', () =>{
            assert.equal(mathEnforcer.sum(1,1), 2);
            assert.equal(mathEnforcer.sum(1,-1), 0);
            assert.equal(mathEnforcer.sum(1,0), 1);
            assert.equal(mathEnforcer.sum(-1,-1), -2);
            assert.equal(mathEnforcer.sum(-1.2,-1.3), -2.5);
            assert.equal(mathEnforcer.sum(1.3,-1.2), 0.10000000000000009); 
        });
    });
});

describe('mathEnforcer',()=>{

    describe("addFive", () =>{
// if // typeOf // return
        it('with invalid argument - expect', () =>{
            expect(mathEnforcer.addFive([1,2,3,5])).to.be.undefined
        })
        it('with valid argument - expect',()=>{
            expect(mathEnforcer.addFive(9)).equal(14)
        })
        it('with valid negative num- expect',()=>{
            expect(mathEnforcer.addFive(-10)).equal(-5);
        })
        it('with valid floating num- expect',()=>{
            expect(mathEnforcer.addFive(-10.5)).equal(-5.5)
        })
    })

    describe('subtract', () => {
        it('is not number- expect',() => {
            expect(mathEnforcer.subtractTen("a")).to.be.undefined
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
        });
        it('subtract properly- expect',()=>{
            expect(mathEnforcer.subtractTen(0)).equal(-10)
            expect(mathEnforcer.subtractTen(-5)).equal(-15)
            expect(mathEnforcer.subtractTen(10.2)).equal(0.1999999999999993)
            expect(mathEnforcer.subtractTen(1)).equal(-9)
            expect(mathEnforcer.subtractTen(10)).equal(0)
            expect(mathEnforcer.subtractTen(20)).equal(10)

        })
    
    describe('sum',()=>{
        it('number plus string', () =>{
            expect(mathEnforcer.sum('1',1)).to.be.undefined
            expect(mathEnforcer.sum(1,'1')).to.be.undefined
        })
        it('numbers', () =>{
            expect(mathEnforcer.sum(1,1)).equal(2)
            expect(mathEnforcer.sum(1,-1)).equal(0)
            expect(mathEnforcer.sum(1,0)).equal(1)
            expect(mathEnforcer.sum(-1,-1)).equal(-2)
            expect(mathEnforcer.sum(-1.2,-1.3)).equal(-2.5)
            expect(mathEnforcer.sum(1.3,-1.2)).equal(0.10000000000000009)
        })
    });
    })
});
