"use strict";
class ExercisePerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}  ${this.lastName}`;
    }
}
class Employee extends ExercisePerson {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=Person.js.map