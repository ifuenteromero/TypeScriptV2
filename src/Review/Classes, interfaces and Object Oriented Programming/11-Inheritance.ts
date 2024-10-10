// Inheritance
// 1. Inheritance is a way to create a new class for using details of an existing class without modifying it.

// Class Student, class Teacher, con propiedades comunes y métodos comunes
// propiedas comunes como firstName, lastName, fullName, walk, talk.

// Podemos una clase Parent / Base / Super class con estas propiedades y métodos comunes

class Person2 {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	walk(): void {
		console.log({ walk: 'Walking' });
	}
}

// La clase Student se llama Child / Dervied / Sub class

class Student2 extends Person2 {
	constructor(
		readonly studentId: number,
		firstName: string,
		lastName: string
	) {
		super(firstName, lastName);
	}

	takeTest(): void {
		console.log({ takeTest: 'Taking test' });
	}
}

const student2 = new Student2(1, 'Irene', 'Fuente');
student2.firstName; // Irene
student2.lastName; // Fuente
student2.fullName; // Irene Fuente
student2.walk(); // { walk: 'Walking' }
student2.takeTest(); // { takeTest: 'Taking test' }

// Method overriding

class Teacher2 extends Person2 {
	override get fullName(): string {
		return `Prof. ${super.fullName}`;
	}
}

// Activamos ts(4114) noImplicitOverride

const teacher2 = new Teacher2('Irene', 'Fuente');

console.log(teacher2.fullName); // Prof. Irene Fuente

// Polimorphism
// Polimorphism is the ability to call the same method on different objects and each object responding in different ways.

// Polimorfismo. Las clases pueden actuar de forma polimórfica. Si creamos una función para imprimir los nombres completos de las personas
// esta funciona de forma polimófica y usa el principio open Closed de la programación orientada a objetos, que dice que las clases deben
// estar abiertas a extensión y cerradas a modificación. Este es un principio que debe intentar ser implementado aunque en la práctica no siempre
// se puede llevar a cabo. los métodos get fullname tiene la palabra overrride y esto significa que si se modifica el fullname de la clase Person
// no se verá afectado en los que sobreescriben en las clases Professor y Principal

const printNames2 = (people: Person2[]): void => {
	for (const person of people) {
		console.log(person.fullName);
	}
};

class Principal2 extends Person2 {
	override get fullName(): string {
		return `Principal ${super.fullName}`;
	}
}

const people2 = [
	new Student2(1, 'Irene', 'Fuente'),
	new Teacher2('Irene', 'Fuente'),
	new Principal2('Mosh', 'Hamedani'),
];

printNames2(people2); // Irene Fuente, Prof. Irene Fuente
