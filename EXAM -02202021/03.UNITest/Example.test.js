const { assert, expect } = require('chai');

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
}
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};


describe('numberOperations',()=>{

    describe("powNumber", () =>{

        it('01.correct result', () =>{
            assert.equal(numberOperations.powNumber(3),9)
        });
    });

    describe('numberChecker', () => {
        let input = 1
        let input2 = 200
        let input4 = 100
        let input3 = 'a'
        it('01. correct', () =>{
            assert.equal(numberOperations.numberChecker(input),'The number is lower than 100!')
        });

        it('02',()=>{
            assert.equal(numberOperations.numberChecker(input2),'The number is greater or equal to 100!')
        });
        it('03',()=>{
            assert.throw(() => numberOperations.numberChecker(input3), 'The input is not a number!');
        });
        it('04',()=>{
            assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!');
        });

    });
    describe('sumArrays',()=>{
        arr1 = [1,2,3]
        arr2 = [4,5,6]

        arr3 = [1,2,3,4]
        arr4 = [4,5,6]

        arr5 = [1,2,3]
        arr6 = [4,5,6,6]

        it('01', () =>{
            expect(numberOperations.sumArrays(arr1, arr2)).to.deep.equal([5,7,9])
            // assert.equal(numberOperations.sumArrays(arr1, arr2),[5,7,9])
        });

        it('02',()=>{
            expect(numberOperations.sumArrays(arr3,  arr4)).to.deep.equal([5,7,9,4])

        });
        it('03',()=>{
            expect(numberOperations.sumArrays(arr5,  arr6)).to.deep.equal([5,7,9,6])

        });
    });

})