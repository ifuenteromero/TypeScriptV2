// Given the Person class below, create a getter for getting the full name of a person.
// class Person {
//     constructor(publicfirstName: string, publiclastName: string) { }
// }
//

class ExercisePerson {
    constructor(public firstName: string, public lastName: string) { }

    get fullName(): string {
        return `${this.firstName}  ${this.lastName}`
    }
}

// Create a new class called Employee that extends Person and adds a new property called salary.

class Employee extends ExercisePerson {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number,
    ) {
        super(firstName, lastName)
    }
}

// •What is the difference between private and protected members?
// Privatemembers are not inherited by child classes.


// •Given the data below, define an interface for representing employees:

// let employee = {name:'John Smith',salary:50_000,address:{street:'Flinders st',city:'Melbourne',zipCode:3144,},};

interface Address {
    street: string,
    city: string,
    zipCode: number
}

interface Employee {
    name: string,
    salary: number,
    address: Address

}
