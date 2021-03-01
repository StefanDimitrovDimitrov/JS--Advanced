class Vacationer {
   
    constructor(fullName, creditCard) {
        this.fullName = fullName
        this.creditCard = creditCard
        this.wishList = []
        this.idNumber = this.generateIDNumber()
        
    }

    get fullName() {
        return this._fullName;
    };

    set fullName(value) {

        if (value.length != 3 || value == undefined) {
            throw new Error(`Name must include first name, middle name and last name.`)
        }

        for (const name of value) {
            let pattern = new RegExp('^[A-Z]{1}[a-z+]+')
            let isValid = pattern.exec(name)
            if (isValid == null || isValid[0] !== name) {
                throw new Error(`Invalid full name\n`)
            }
        }

        this._fullName = {
            firstName: value[0],
            middleName: value[1],
            lastName: value[2],

        }
    };

    get creditCard() {
        return this._creditCard;
    };

    set creditCard(value) {
        if(value == undefined || value.length < 2 ){
            this._creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        }else{
            
            if (typeof value[0] !== 'number' ||typeof value[2] !== 'number') {
                throw new Error
            }
            
            this._creditCard = {
                cardNumber: value[0],
                expirationDate: value[1],
                securityNumber: value[2]
            }
        }
    };
}