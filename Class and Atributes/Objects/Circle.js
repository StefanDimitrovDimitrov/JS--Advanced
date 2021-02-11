class Circle {
    constructor(r) {
        this.r = r

    }

    get diameter() {
        return this.r * 2;

    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Diameter must be a number')
        }
        this.r = value / 2;
    }

    get area(){
        return this.r ** 2 * Math.PI;
    }

    get radius(){
        return this.r
    }


}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
