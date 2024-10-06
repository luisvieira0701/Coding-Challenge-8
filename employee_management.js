//Task 1- Create Player Class with properties and methods
class Player {
    constructor(name, salary, position, team) {
        this.name = name
        this.salary = salary
        this.position = position
        this.team = team
    }
        getdetails() {
            console.log(`${this.name} details are: Position: ${this.position}, Salary: ${this.salary}`)
            }        
    
}

//Task 2- Create Team to Manage Players and calculate salary
class Team {
    constructor(teamName, players) {
        this.teamName = teamName
        this.players = players;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    getTeamSalary() {
        let totalTeamSalary = this.players.reduce((totalSalary, player) => totalSalary + player.salary, 0)
        return (`The total Salary for ${this.teamName} is ${totalTeamSalary}`)
    }
}

//Task 3- Create Manager Class with Inheritance from Employee
class Coach extends Player {
    constructor (name, salary, position, team, bonus) {
        super(name, salary, position, team)
        this.bonus = bonus;
    }
}


