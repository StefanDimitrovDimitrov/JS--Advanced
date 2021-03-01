const expect = require('chai').expect;
// we test what we recive in the function and the return statment 
let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe('test', () => {
    describe('newCarCost', () => {
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