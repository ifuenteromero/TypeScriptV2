"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('walk');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('taking a test');
    }
}
let student = new Student(1, 'Irene', 'Fuente');
console.log({ firstName: student.firstName });
console.log({ lastName: student.lastName });
console.log({ fullName: student.fullName });
console.log(student.studentId);
console.log(student.takeTest());
//# sourceMappingURL=Inheritances.js.map