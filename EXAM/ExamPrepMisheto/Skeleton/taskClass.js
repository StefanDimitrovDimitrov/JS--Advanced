class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error(`Not enough parking space.`)
        }

        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false,
        }
        this.vehicles.push(car)
        this.capacity--
        return `The ${carModel}, with a registration number ${carNumber}, parked.`

    }


    removeCar(carNumber) {
        let currentCar = this.vehicles.find(x => x.carNumber == carNumber);
        if (!currentCar) {
            throw new Error(`The car, you're looking for, is not found.`)
        }

        if (!currentCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        let indx = this.vehicles.findIndex(v => v.carNumber === carNumber);
        this.vehicles.splice(indx, 1);
        this.capacity++
        return `${carNumber} left the parking lot.`


    }


    pay(carNumber) {
        let currentCar = this.vehicles.find(x => x.carNumber == carNumber);
        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`

    }


    getStatistics(carNumber) {

        if (!carNumber) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                    .sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map(x => `${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`)
                    .join('\n')
            ].join('\n')
        }

        let currentCar = this.vehicles.find(x => x.carNumber == carNumber);
        return `${currentCar.carModel} == ${currentCar.carNumber} - ${currentCar.payed ? 'Has payed' : 'Not payed'}`
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo t600", "TX3691Cb"));
console.log(parking.addCar("Volvo t600", "TX3691Cv"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

