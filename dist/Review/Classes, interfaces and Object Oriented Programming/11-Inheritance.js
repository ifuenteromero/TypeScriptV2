"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log({ walk: 'Walking' });
    }
}
class Student2 extends Person2 {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log({ takeTest: 'Taking test' });
    }
}
const student2 = new Student2(1, 'Irene', 'Fuente');
student2.firstName;
student2.lastName;
student2.fullName;
student2.walk();
student2.takeTest();
class Teacher2 extends Person2 {
    get fullName() {
        return `Prof. ${super.fullName}`;
    }
}
const teacher2 = new Teacher2('Irene', 'Fuente');
console.log(teacher2.fullName);
const printNames2 = (people) => {
    for (const person of people) {
        console.log(person.fullName);
    }
};
class Principal2 extends Person2 {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
const people2 = [
    new Student2(1, 'Irene', 'Fuente'),
    new Teacher2('Irene', 'Fuente'),
    new Principal2('Mosh', 'Hamedani'),
];
printNames2(people2);
//# sourceMappingURL=11-Inheritance.js.map