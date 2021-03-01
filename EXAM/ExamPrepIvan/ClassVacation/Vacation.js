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


    generateIDNumber (){
        let letter = this.fullName.firstName[0]
        

        let result = (231 * letter.charCodeAt()) + (139 * this.fullName.middleName.length)


        let lastName= this.fullName.lastName
        let lastLetter = lastName[lastName.length-1]
        let add = ["a","e", "o", "i", "u"].some(x => x == lastLetter)
        
        if (add){
            result += "8"                
        }else{
            result += "7"
        }

        return result

    }

    addCreditCardInfo(input){
        if(input == undefined || input.length < 3 ){
            throw new Error (`Missing credit card information\n`)
        }else{
            
            if (typeof input[0] !== 'number' ||typeof input[2] !== 'number') {
                throw new Error ("Invalid credit card details")
            }
            
            this._creditCard = {
                cardNumber: input[0],
                expirationDate: input[1],
                securityNumber: input[2]
            }
        }
    }
 
    addDestinationToWishList(destination){
        
        if(this.wishList.includes(destination)){
            throw new Error ("Destination already exists in wishlist")
        }
        
        this.wishList.push(destination)
        if(this.wishList.length > 1 ){
            this.wishList.sort((a, b) => a.length - b.length)
        }
    }

    getVacationerInfo() {
        let result =`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList.length == 0 ? "empty" : this.wishList.join(", ")}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\n${this.creditCard.expirationDate == ''?"Expiration Date: ":`Expiration Date: ${this.creditCard.expirationDate}`}\nSecurity Number: ${this.creditCard.securityNumber}` 
        return result.trim();
    }
}
