class Person{
    constructor(Fname, Lname, age, email){
        this.firstname = Fname;
        this.lastname = Lname;
        this.age = age;
        this.email = email;
    }
    
    toString(){
        return `${this.firstname} ${this.lastname} (age: ${this.age}, email: ${this.email})`
    }

}


let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(p.toString());