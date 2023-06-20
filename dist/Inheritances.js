"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
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
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
const teacher = new Teacher('Irene', 'Fuente');
console.log({ teacherFullName: teacher.fullName });
class Principal extends Person {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
const printNames = (people) => {
    for (const person of people) {
        console.log(person.fullName);
    }
};
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Mary', 'James')
]);
//# sourceMappingURL=Inheritances.js.map