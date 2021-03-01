const { expect, assert } = require('chai');

describe('charLookup', () => {
    // function lookupChar(string, index) {
    //     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    //         return undefined;
    //     }
    it('', () => {  
        // If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));
    });
    // function lookupChar(string, index) {
    //     if (string.length <= index || index < 0) {
    //         return "Incorrect index";
    //     }
    it('', () => {
        // If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
        assert.equal(lookupChar('abv', -1), "Incorrect index");
        assert.equal(lookupChar('abv', 4), "Incorrect index");
    
    });
    // function lookupChar(string, index) {
    //     return string.charAt(index);
    // }
    it('', () => {
        // If both parameters have correct types and values - return the character at the specified index in the string.
        assert.equal(lookupChar('abv', 0), 'a');
        assert.equal(lookupChar('abv', 2), 'v');
    });

})

///_________________________________________________________________________________________________///

describe('mathEnforcer',()=>{

    describe("addFive", () =>{
        // let mathEnforcer = {
        //     addFive: function (num) {
        //         if (typeof(num) !== 'number') {
        //             return undefined;
        //         }
        //         return num + 5;
        //     },

        it('with invalid argument', () =>{
            //If the parameter is NOT a number, the funtion should return undefined.
            actualResult = mathEnforcer.addFive([1,2,3,5]);
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult);
        })

        it('with valid argument',()=>{
            //If the parameter is a number, add 5 to it, and return the result.
            actualResult = mathEnforcer.addFive(9);
            expectedResult = 14;
            assert.equal(actualResult, 14);
        })
        it('with valid negative num',()=>{
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;

            assert.equal(actualResult, expectedResult);
        })
        it('with valid floating num',()=>{
            actualResult = mathEnforcer.addFive(-10.5);
            expectedResult = -5.5;

            assert.equal(actualResult, expectedResult);
        })
    })

    // subtractTen: function (num) {
    //     if (typeof(num) !== 'number') {
    //         return undefined;
    //     }
    //     return num - 10;
    // },
    describe('subtract', () => {
        it('is not number',() => {
            //If the parameter is NOT a number, the function should return undefined.
            assert.isUndefined(mathEnforcer.subtractTen("a"));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
        it('subtract properly',()=>{
            // o	If the parameter is a number, subtract 10 from it, and return the result.
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        })
    })

    // sum: function (num1, num2) {
    //     if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    //         return undefined;
    //     }
    //     return num1 + num2;
    // }
    describe('sum',()=>{
        // o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 
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

///_________________________________________________________________________________________________///
// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

describe ('check isOffOrEven', () => {
    //If the passed parameter is NOT a string return undefined.
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message a==a')
    })
    it('Is even', () => {
        //If the parameter is a string return either "even" or "odd" based on the length of the string.
        assert.equal(isOddOrEven('aa'),'even')
    })
    it('Is odd', () => {
        //If the parameter is a string return either "even" or "odd" based on the length of the string.
        assert.equal(isOddOrEven('a'),'odd')
    })
})

///_________________________________________________________________________________________________///

// let dealership = {
//     newCarCost: function (oldCarModel, newCarPrice) {

//         let discountForOldCar = {
//             'Audi A4 B8': 15000,
//             'Audi A6 4K': 20000,
//             'Audi A8 D5': 25000,
//             'Audi TT 8J': 14000,
//         }

//         if (discountForOldCar.hasOwnProperty(oldCarModel)) {
//             let discount = discountForOldCar[oldCarModel];
//             let finalPrice = newCarPrice - discount;
//             return finalPrice;
//         } else {
//             return newCarPrice;
//         }
//     },

//     carEquipment: function (extrasArr, indexArr) {
//         let selectedExtras = [];
//         indexArr.forEach(i => {
//             selectedExtras.push(extrasArr[i])
//         });

//         return selectedExtras;
//     },

//     euroCategory: function (category) {
//         if (category >= 4) {
//             let price = this.newCarCost('Audi A4 B8', 30000);
//             let total = price - (price * 0.05)
//             return `We have added 5% discount to the final price: ${total}.`;
//         } else {
//             return 'Your euro category is low, so there is no discount from the final price!';
//         }
//     }
// }

// •	carEquipment(extrasArr, indexArr) - A function that accepts two arrays:

// •	euroCategory(category) - A function that accepts a single parameter (number):



describe('test', () => {
    describe('newCarCost', () => {
// o	the function checks if you are returning your old car to the dealers or not
// o	if you are returning your old car, you will get a fixed amount of money deducted from your new car price
// o	then the function returns the price for the car
        // model is supported -> price reduced by model value
        it('returns original price when modle is not supported', ()=>{
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });
        // model is not supported -> no discount
        it('returns discount price', ()=>{
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });
    });

    describe('carEquipment', () => {
// o	the first arrays includes the available extras for your car ([‘heated seats’, ‘sliding roof’, ‘sport rims’, ‘navigation’, etc.])
// o	the second array includes the index of the extras you would want ([0, 3, 4])
// o	every given index in the indexArr will be valid
// o	then the function returns an array with all the selected extras
        // single element, single picked
        it('single element, single pick', () =>{
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']); // testining Array //return to.deep.equal(['a'])
        });
        //test overlouding - multiple elements, multiple picks
        it('single element, single pick', () =>{
            expect(dealership.carEquipment(['a','b','c'], [0,2])).to.deep.equal(['a','c']);
        })

    });

    describe('euroCategory', () => {
// o	the function checks the ecology of your new car
// o	then the function returns a message regarding the final price you will have to pay, depending on your car eco category
         //category is bellow threshold
         it('category is bellow threshold', () =>{
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
         //category is above threshold
         it('category is above threshold', () =>{
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });
         //category is equal ....
         it('category is equal', () =>{
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
    });
});

///_________________________________________________________________________________________________///

// let pizzUni = {
//     makeAnOrder: function (obj) {

//         if (!obj.orderedPizza) {
//             throw new Error('You must order at least 1 Pizza to finish the order.');
//         } else {
//             let result = `You just ordered ${obj.orderedPizza}`
//             if (obj.orderedDrink) {
//                 result += ` and ${obj.orderedDrink}.`
//             }
//             return result;
//         }
//     },

//     getRemainingWork: function (statusArr) {

//         const remainingArr = statusArr.filter(s => s.status != 'ready');

//         if (remainingArr.length > 0) {

//             let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
//             let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

//             return pizzasLeft;
//         } else {
//             return 'All orders are complete!'
//         }

//     },

//     orderType: function (totalSum, typeOfOrder) {
//         if (typeOfOrder === 'Carry Out') {
//             totalSum -= totalSum * 0.1;

//             return totalSum;
//         } else if (typeOfOrder === 'Delivery') {

//             return totalSum;
//         }
//     }
// }

// •	makeAnOrder(obj) - A function that accepts an object:

// •	getRemainingWork(statusArr) - A function that accepts array:

// •	orderType(totalSum, typeOfOrder) - A function that accepts two parameters (number, string):



describe("TODO …", () => {
    // o	the object includes {orderedPizza: ‘the name of the pizza’, orderedDrink: ‘the name of the drink’}
// o	the function checks if there are ordered pizza and a drink.
// o	Then the function returns confirmation message for your order
    it("Make an order", () => {
        let pizza1 = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza2 = { orderedDrink: 'drink' };
        let pizza3 = { orderedPizza: 'pizza' };
        let pizza4 = {};

        assert.throw(() => pizzUni.makeAnOrder(pizza2), 'You must order at least 1 Pizza to finish the order.');
        assert.throw(() => pizzUni.makeAnOrder(pizza4), 'You must order at least 1 Pizza to finish the order.');

        assert.equal(pizzUni.makeAnOrder(pizza3), `You just ordered ${pizza3.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza1), `You just ordered ${pizza1.orderedPizza} and ${pizza1.orderedDrink}.`);
    });
    it("getRemainingWork", () => {
// o	the array should look like: [{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
// o	the function checks the status of the order and returns a message with the order status
        let statusArr = [
            { pizzaName: 'pizza', status: 'ready' },
            { pizzaName: 'pizza2', status: 'ready' },
            { pizzaName: 'pizza3', status: 'preparing' }, { pizzaName: 'pizza4', status: 'preparing' }
        ];
        let statusArr2 = [
            { pizzaName: 'pizza', status: 'ready' },
            { pizzaName: 'pizza2', status: 'ready' },
        ];

        let statusArr3 = [
            { pizzaName: 'pizza3', status: 'preparing' }, { pizzaName: 'pizza4', status: 'preparing' }
        ];

        assert.equal(pizzUni.getRemainingWork(statusArr2), 'All orders are complete!')
        assert.equal(pizzUni.getRemainingWork(statusArr), `The following pizzas are still preparing: pizza3, pizza4.`)
        assert.equal(pizzUni.getRemainingWork(statusArr3), `The following pizzas are still preparing: pizza3, pizza4.`)
    });
    it("orderType", () => {
// o	the function first checks what is the type of the order (‘Carry Out’ , ‘Delivery’)
// o	if the type of the order is ‘Carry Out’ you get 10% discount
// o	then the function returns the total sum of the order
        let orderTypeDelivery = 'Delivery';
        let orderTypeCary = 'Carry Out';
        let totalSum = 100;
        let totalSum1 = -100;
        let totalSum2 = 0;

        assert.equal(pizzUni.orderType(totalSum, orderTypeDelivery), 100)
        assert.equal(pizzUni.orderType(totalSum, orderTypeCary), 90)

        assert.equal(pizzUni.orderType(totalSum1, orderTypeDelivery), -100)
        assert.equal(pizzUni.orderType(totalSum1, orderTypeCary), -90)

        assert.equal(pizzUni.orderType(totalSum2, orderTypeDelivery), 0)
        assert.equal(pizzUni.orderType(totalSum2, orderTypeCary), 0)
    });

});

///_________________________________________________________________________________________________///
// function isSymmetric(arr) {
//     if(!Array.isArray(arr)){
//         return false;
//     }
//     let reversed = arr.slice(0).reverse();
//     let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
//     return equal;
// }



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
///_________________________________________________________________________________________________///
// function rgbToHexColor(red, green, blue) {
//     if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
//         return undefined; // Red value is invalid
//     }
//     if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
//         return undefined; // Green value is invalid
//     }
//     if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
//         return undefined; // Blue value is invalid
//     }
//     return "#" +
//         ("0" + red.toString(16).toUpperCase()).slice(-2) +
//         ("0" + green.toString(16).toUpperCase()).slice(-2) +
//         ("0" + blue.toString(16).toUpperCase()).slice(-2);
// }

// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range

describe('rgbToHexColor', () => {
    // •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
    it('coverts black to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
    it('coverts white to hex - assert', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')
    });
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range
    it('returns undefined for string params - assert', () => {
        assert.equal(rgbToHexColor('a', 'a', 'a'), undefined)
    });
// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
    it('convert red to hex - assert', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000')
    })
// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
    it('convert green to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00')
    })
// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
    it('convert blue to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF')
    });
    // •	Return undefined if any of the input parameters are of invalid type or not in the expected range
    it('returns undefined for value > 255', () => {
        assert.equal(rgbToHexColor(0, 0, 256),undefined)
    })
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range
    it('returns undefined for negative', () => {
        assert.equal(rgbToHexColor(0, 0, -1),undefined)

    })
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range
    it('returns undefined for value > 255', () => {
        assert.equal(rgbToHexColor(0, 256, 0),undefined)
    })
});