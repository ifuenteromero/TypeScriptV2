class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    walk() {
        console.log('walk');

    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
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


