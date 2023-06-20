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


// queremos crear una nueva clase Teacher que herede de la clase Person
// queremos sobreescribir el método fullName de tal manera que antes de unir el nombre y apellidos ponga la palabra Professor

class Teacher extends Person {

    override  get fullName(): string {
        return `Professor ${super.fullName}`
    }
}

const teacher = new Teacher('Irene', 'Fuente');
console.log({ teacherFullName: teacher.fullName });


