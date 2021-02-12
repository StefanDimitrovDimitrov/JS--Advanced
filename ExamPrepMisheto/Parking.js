class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = []
    }

    addCar(carModel,carNumber){
        if(this.capacity === 0){
            throw new Error('Not enough parking space')
        }

        return `The ${carModel},with a ragistration number ${carNUmber}, prked.`
    }

    removeCar(carNumber){
        const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);

        if(carIndex < 0 ){
            throw new Error("the car, you're looking for, is not found.");
        }

        if(!this.vehicles[carIndex].payd){

        }
    }

    pay(carNumber){
        let car = this.vehicles.find(car => car.carNumber === carNumber);

        if(!car){
            throw new Error (`${carNumber}'s somnthin`)
        }

    }

    getStatistics(carNumber){
        if(!carNumber){
            return [
                `The Parking`,
                this.Vehicales
                .sort((a,be))
            ].join('\n')
        }
    }

}