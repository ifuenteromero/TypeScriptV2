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
