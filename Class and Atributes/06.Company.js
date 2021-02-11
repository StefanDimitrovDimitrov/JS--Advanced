class Company {
    constructor(){
        this.departments = []
    }

    addEmployee(username, Salary, Position, Department){
        let validation = [username, Salary, Position, Department]
        let isError = false
        validation.forEach(x =>{
            if(x == '' || x == null || x == undefined){
                isError = true
            }
        })
        if(Salary < 0){
            isError = true
        }

        if (isError){
            throw "Invalid input!"
        }else{
            this.departments.push({username:username,salary:Salary,position:Position,department:Department})
            return `New employee is hired. Name: ${username}. Position: ${Position}`
        }

    }
    bestDepartment(){
        let departementsUniq = []
        let departmentHiestAvrSalary = {}
        this.departments.forEach(x =>{
            if(!departementsUniq.includes(x.department)){
                departementsUniq.push(x.department)
            }
        })
        
        
            for (const dep of departementsUniq) {
            let AvrSalary = 0
            let count = 0
               this.departments.forEach(y =>{ 
                if(dep == y.department){
                    AvrSalary += y.salary
                    count ++
                }
            })
            AvrSalary = AvrSalary/count
            departmentHiestAvrSalary[dep] = AvrSalary
        }

        const sortable = Object.fromEntries(
            Object.entries(departmentHiestAvrSalary).sort(([,a],[,b]) => b-a)
        );
        let a =Object.keys(sortable)[0]
        let b =sortable[Object.keys(sortable)[0]].toFixed(2)
        let result = []
        this.departments.forEach(z =>{
            if(z.department == a){
                result.push({username:z.username,salary:z.salary,position:z.position})
            }
        })

        result.sort((a, b) => b.salary - a.salary||a.username.localeCompare(b.username));
        let resultArr = []
        result.forEach(q =>{
            resultArr.push(`${q.username} ${q.salary} ${q.position}`)
        })
        let FirstPartResult =`Best Department is: ${a}\nAverage salary: ${b}`
        let finalResultEmployees = ''
        for (const req of resultArr) {
            finalResultEmployees += `\n${req}`  
        }
        let finalResult = FirstPartResult + finalResultEmployees
        return finalResult
    
    }
        //1.create new list with uniqe departments
        //2.calculate average slaries per department, store the result in new colection
        //
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
