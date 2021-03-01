const { describe } = require('mocha');
const { assert } = require('chai');


let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe("TODO …", function(){
    it("Make an order", function() {
            let pizza = {orderedPizza: 'pizza', orderDrink: 'drink'};
            let pizza1 = {orderedDrink: 'drink'};

            assert.throw(()=>pizzaUni.makeAnOrder(pizza1),'You must order at least 1 Pizza to finish the order.');
        });
});




















// describe('rgbToHexColor', () => {
//     it('coverts black to hex', () =>{
//         expect(rgbToHexColor(0,0,0)).to.equal('#000000');
//     });

//     it('coverts white to hex', () =>{
//         expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
//     });

//     it('returns undefined for string params', () =>{
//         expect(rgbToHexColor('a','a','a')).to.equal('undefined');
//     });

//     it('convert red to hex' , () => {
//         expect(rgbToHexColor(255, 0, 0)).to.equal('#00FF00');
//     })

//     it('convert green to hex', () => {
//         expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
//     })

//     it('convert blue to hex', () => {
//         expect(rgbToHexColor(0, 0, 255)).to.equal('#00FF00');
//     })

//     it('returns undefined for negative', () => {
//         expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
//     })

//     it('returns undefined for value > 255', () => {
//         expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
//     })

//     it('returns undefined for negative', () => {
//         expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
//     })

//     it('returns undefined for value > 255', () => {
//         expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
//     })

//     it('returns undefined for negative', () => {
//         expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
//     })

//     it('returns undefined for value > 255', () => {
//         expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
//     })

//     // test overloading

//     it('coverts (151, 104, 172) to hex', () => {
//         expect(rgbToHexColor(151, 104, 172)).to.be.equal('#9768AC');
//     });

//     it('coverts (42, 173, 170) to hex', () => {
//         expect(rgbToHexColor(42, 173, 170)).to.be.equal('#2AADAA');
//     });

// });