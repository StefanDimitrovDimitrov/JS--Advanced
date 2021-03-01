
const { expect, assert } = require('chai');

class HolidayPackage {
    constructor(destination, season) {
        
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

// •	Must be instantiated with two parameters – a string destination and a string season.
// •	Accessor insuranceIncluded – used to get and set the value of the insurance status.
// •	Function showVacationers() – returns a string with the vacationers’ names. If there aren’t any, returns a corresponding message. 
// •	Function addVacationer() – adds a vacationer to the array of vacationers. In case of an invalid name, the function throws an error.  
// •	Function generateHolidayPackage() – calculates the total price for the holiday package and returns a string, containing an overview of the generated holiday package. However, in case that there are no vacationers, it throws an error. The total price includes 400BGN per vacationer, an extra 200BGN season fee for the summer and winter seasons and 100BGN for the insurance, if included in the package.
// When creating an instance, changing any of the property values, or adding a new vacationer, the parameters are validated. They must follow these rules:
// •	insuranceIncluded – Boolean
// •	vacationerName – non-empty string, containing a valid name. A name is considered valid when it consists of both first name and last name. 

//mocha ExamPrepIvan2.test.js

describe('HolidayPackage', () => {
    describe('constructor', () => {
        let holidayPackage = new HolidayPackage('Italy', 'Summer');
        it('constructor-vacationors-destination', () =>{
            expect(holidayPackage.destination).to.equal("Italy")
        })
        it('constructor-vacationors-season', () =>{
            expect(holidayPackage.season).to.equal("Summer")
        })
    })
    describe('Accessor insuranceIncluded', () => {
        let holidayPackage = new HolidayPackage('Italy', 'Summer');
        
        it('insuranceIncluded- boolean', () =>{
            expect(holidayPackage.insuranceIncluded = false).equal(false)
        })
        it('insuranceIncluded - not a boolean', () =>{
            assert.throw(() => holidayPackage.insuranceIncluded = 3, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackage.insuranceIncluded = 's', 'Insurance status must be a boolean');
            assert.throw(() => holidayPackage.insuranceIncluded = [], 'Insurance status must be a boolean');
        })
    })
    describe('showVacationers', () => {
        it('showVacationers', () =>{
        let holidayPackage = new HolidayPackage('Italy', 'Summer');
        holidayPackage.vacationers.length = 0
        
        let holidayPackage1 = new HolidayPackage('Italy', 'Summer');
        holidayPackage1.vacationers.push('a')

        expect(holidayPackage.showVacationers()).to.equal("No vacationers are added yet")
        expect(holidayPackage1.showVacationers()).to.equal(`Vacationers:\na`)
        })
    })
    describe('addVacationer', () => {
        let holidayPackage = new HolidayPackage('Italy', 'Summer');
        it('addVacationer - correct', () =>{
        expect(holidayPackage.addVacationer('Ivan Ivanov')).to.be.undefined
        })
        it('addVacationer - not correct', () =>{
        assert.throw(() => holidayPackage.addVacationer('Ivan'), 'Name must consist of first name and last name');
        assert.throw(() => holidayPackage.addVacationer(' '), 'Vacationer name must be a non-empty string');
        assert.throw(() => holidayPackage.addVacationer(5), 'Vacationer name must be a non-empty string');
        })
        
    })
    describe('generateHolidayPackage', () => {
        it('generateHolidayPackage - correct', () =>{
        let holidayPackage = new HolidayPackage('Italy', 'Summer');
        holidayPackage.vacationers = ['Ivan Ivanov']
        let totalPrice = 400


        })
    })

})