//Task 1- Create Employee Class with properties and methods
class Player {
    constructor(name, salary, position, team) {
        this.name = name
        this.salary = salary
        this.position = position
        this.team = team
    }
        getdetails() {
            console.log(`${this.name} details are: 
                Position: ${this.position},
                Salary: ${this.salary}`)
            }        
    
}

//Testing first class
const employee1 = new Player ('Tiger', 70000, 'Left wing')
console.log(employee1)

