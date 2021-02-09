function personAndTeacher(){
    
    class Person{
        constructor(name,email){
            this.name = name
            this.email = email
        }
    }
    
    class Teacher extends Person{
        constructor(subject){
            this.subjet = subject
            super()
        }
    }

    return {
        Person(),
        Teacher()
    }

}    