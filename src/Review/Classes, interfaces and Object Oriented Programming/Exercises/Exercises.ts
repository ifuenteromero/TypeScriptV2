/**
 * Define a class called Logger that takes the name of a file in its constructor and provides
 * a method for writing messages to that file. Don’t worry about the actual file I/O operations.
 * Just define the class with the right members.
 *
 */

class Logger3 {
	constructor(public filename: string) {}

	writeMessage(message: string): void {
		console.log(`Writing message to ${this.filename}: ${message}`);
	}
}
/**
 * Given the Person class below, create a getter for getting the full name of a person
 */

class Person3 {
	constructor(public firstName: string, public lastName: string) {}
	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person = new Person3('Irene', 'Fuente');
console.log({ fullName: person.fullName });

/**
 * Create a new class called Employee that extends Person and adds a new property
    called salary.
 */

class Employee3 extends Person3 {
	constructor(firstName: string, lastName: string, public sallary: number) {
		super(firstName, lastName);
	}
}

/**
 * What is the difference between private and protected members?
 * los miembros privados (propiedades o métodos) no se herendan por subclases, sin embargo
 * los miembros protected sí
 */

/**
 * Given the data below, define an interface for representing employees:
 */

let employee2: Employee4 = {
	name: 'John Smith',
	salary: 50_000,
	address: {
		street: 'Flinders st',
		city: 'Melbourne',
		zipCode: 3144,
	},
};

interface Address {
	street: string;
	city: string;
	zipCode: number;
}

interface Employee4 {
	name: string;
	salary: number;
	address: Address;
}
