function fruit(fruit, weight, price){

    let totalweight = weight/1000;
    money = (totalweight * price).toFixed(2)


console.log(`I need $${money} to buy ${totalweight.toFixed(2)} kilograms ${fruit}.`);

}

fruit('apple', 1563, 2.35)