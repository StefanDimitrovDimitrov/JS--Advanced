class ChristmasDinner{

    constructor(budget){

    this.budget = budget
    this.dishes =  []
    this.products =  []
    this.guests = {}
    }

    get budget(){
        return this._budget

    }

    set budget(value){
        if(value < 0){
            throw new Error (`The budget cannot be a negative number`)
        }
        this._budget = value 
    }
    
    shopping(...rest){
        let[product, price] = rest[0]
        if(price > this.budget){
            throw new Error(`Not enough money to buy this product`)
        }
        this.products.push(product)
        this.budget -= price
        return `You have successfully bought ${product}!`
    }

    recipes(...rest){
        let {recipeName, productsList} = rest[0]
        let allFounded =productsList.every(
            ingredient =>this.products.includes(ingredient));
            
        if(!allFounded){
            throw new Error("We do not have this product")
        }
        
        this.dishes.push({recipeName: recipeName, productsList: productsList})
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        let isdishPresent = this.dishes.find(d => d.recipeName === dish)
        
        if(!isdishPresent){
            throw new Error(`We do not have this dish`)
        }
        
        let isNamePresent = this.guests.hasOwnProperty(name);
        
        if(isNamePresent){
            throw new Error(`This guest has already been invited`)
        }

        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        let result = ''
        for (let [key, value] of Object.entries(this.guests)) {
            let products = this.dishes.find(x => x.recipeName == value)
            result += `${key} will eat ${value}, which consists of ${products.productsList.join(', ')}\n`;
          }
        
        return result.trim()

    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
recipeName: 'Oshav',
productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
