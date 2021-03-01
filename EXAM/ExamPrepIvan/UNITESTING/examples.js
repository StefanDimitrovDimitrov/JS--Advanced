
//const { describe } = require('mocha');
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


describe("TODO …", () => {
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

    it("orderType", () => {
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
