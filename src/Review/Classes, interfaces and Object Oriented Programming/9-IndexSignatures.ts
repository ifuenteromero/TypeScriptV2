// Index signatures

// let person = {};
// person.name = 'Irene';

// Esto no se puede hacer en TypeScript. Pero hay situaciones en la que se requiere
// añadir propiedades a un objeto dinámicamente. Para ello se pueden usar los index signatures.

// Contexto: Tenemos una apliación de conciertos y queremos implementar la asignación de asientos

class SeatAssigment {
	// querríamos algo del tipo:
	// A1: 'Irene'
	// A2: 'Elvira'
	[seatNumber: string]: string;
}

let seats2 = new SeatAssigment();
seats2.A1 = 'Irene';
seats2.A2 = 'Elvira';
