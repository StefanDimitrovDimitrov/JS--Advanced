const { assert ,expect } = require('chai');


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
        expect(pizzUni.makeAnOrder.bind(pizzUni, pizza2)).to.throw('You must order at least 1 Pizza to finish the order.');
        expect(pizzUni.makeAnOrder(pizza4)).to.throw(new Error('You must order at least 1 Pizza to finish the order.'));

        assert.equal(pizzUni.makeAnOrder(pizza3), `You just ordered ${pizza3.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza1), `You just ordered ${pizza1.orderedPizza} and ${pizza1.orderedDrink}.`);

    });
    it("getRemainingWork", () => {
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