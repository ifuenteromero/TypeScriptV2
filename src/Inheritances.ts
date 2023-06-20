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

class Principal extends Person {
    get fullName(): string {
        return `Principal ${super.fullName}`
    }
}

// Polimorfismo. Las clases pueden actuar de forma polimórfica. Si creamos una función para imprimir los nombres completos de las personas
// esta funciona de forma polimófica y usa el principio open Closed de la programación orientada a objetos, que dice que las clases deben
// estar abiertas a extensión y cerradas a modificación. Este es un principio que debe intentar ser implementado aunque en la práctica no siempre
// se puede llevar a cabo. los métodos get fullname tiene la palabra overrride y esto significa que si se modifica el fullname de la clase Person
// no se verá afectado en los que sobreescriben en las clases Professor y Principal


const printNames = (people: Person[]) => {
    for (const person of people) {
        console.log(person.fullName)
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Mary', 'James')
])