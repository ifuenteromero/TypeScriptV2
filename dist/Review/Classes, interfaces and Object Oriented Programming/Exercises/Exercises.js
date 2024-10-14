"use strict";
class Logger3 {
    constructor(filename) {
        this.filename = filename;
    }
    writeMessage(message) {
        console.log(`Writing message to ${this.filename}: ${message}`);
    }
}
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person3('Irene', 'Fuente');
console.log({ fullName: person.fullName });
class Employee3 extends Person3 {
    constructor(firstName, lastName, sallary) {
        super(firstName, lastName);
        this.sallary = sallary;
    }
}
let employee2 = {
    name: 'John Smith',
    salary: 50000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};
//# sourceMappingURL=Exercises.js.map