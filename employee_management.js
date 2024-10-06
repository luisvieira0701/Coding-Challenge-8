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
    constructor(teamName, players = []) {
        this.teamName = teamName
        this.players = players;
    }

    addPlayer(player) {
        this.players.unshift(player);
    }

    getTeamSalary() {
        let totalTeamSalary = this.players.reduce((totalSalary, player) => totalSalary + player.salary, 0)
        return totalTeamSalary
    }

    //Task 4- Handle Bonuses in the Team salary calculation
    calculateTotalSalarywithBonus() {
        let totalSalaryNoBonus = this.getTeamSalary()

        let totalBonusSalary =this.players
            .filter(player => player.position === 'Coach')
            .reduce((bonusIndex, coach) => bonusIndex + coach.bonus, 0)

        return totalSalaryNoBonus + totalBonusSalary
    }
}

//Task 3- Create Manager Class with Inheritance from Employee
class Coach extends Player {
    constructor (name, salary, position, team, bonus) {
        super(name, salary, position, team)
        this.bonus = bonus;
    }
}

//Task 5 Create and manage departments and employees
const ManU = new Team ('Manchester United')
const Liv = new Team ('Liverpool')

const antony = new Player ('Antony', 140000, 'Winger', 'Manchester United')
const mitoma = new Player ('Mitoma', 150000, 'Winger', 'Liverpool')
const pep = new Coach ('Guardiola', 200000, 'Coach', 'Manchester United', 30000)
const tenHag = new Coach ('Ten Hag', 220000, 'Coach', 'Liverpool', 50000)

ManU.addPlayer(antony)
ManU.addPlayer(pep)
Liv.addPlayer(mitoma)
Liv.addPlayer(tenHag)

console.log(`Total Salary for Manchester United: ${ManU.getTeamSalary()}`);
console.log(`Total Salary with coach bonus for Manchester United: ${ManU.calculateTotalSalarywithBonus()}`)
console.log(`Total Salary for Liverpool: ${Liv.getTeamSalary()}`)
console.log(`Total Salary with coach bonus for Liverpool: ${Liv.calculateTotalSalarywithBonus()}`)


