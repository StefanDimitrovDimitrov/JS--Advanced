function factory(library, orders){
    const result = [];
    // interate over orders
    for(let order of orders){
        // copy order template
        const composed = Object.assign({}, order.template)
        // compose methods by part list
        for (let part of order.parts){
            composed[part] = library[part];
        }
        result.push(composed);
    }
    return result
}

const products = factory(library, orders)
console.log(products);

const player = products[3]

