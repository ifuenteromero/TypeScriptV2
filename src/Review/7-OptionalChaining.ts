type Customer = {
	birthDate: Date;
};

const getCustomer = (id: number): Customer | null => {
	return id === 0 ? null : { birthDate: new Date() };
};

// Optional property access operator
const customer = getCustomer(0);
customer?.birthDate; // undefined

console.log(customer?.birthDate?.getFullYear());

const customer2 = getCustomer(1);

console.log(customer2?.birthDate);

// tsc
// node dist/Review/7-OptionalChaining.js

// Optional element access operator
let customers: Customer[] | null | undefined;
customers = null;

const test = customers?.[0];

// Optional call operator
type Logger2 = ((message: string) => void) | null | undefined;

let log: Logger2;

// Asignamos una función a log
// log = (message: string) => {
// 	console.log(message);
// };

// Usamos el operador de llamada opcional para llamar a la función
log?.('This will be logged'); // Salida: "This will be logged"

// Asignamos null a log
// log = null;

// Usamos el operador de llamada opcional nuevamente
log?.('This will not be logged'); // No hay salida, ya que log es null
console.log('test');
console.log(log?.('This will not be logged') + 'test');

// Asignamos undefined a log
// log = undefined;

// Usamos el operador de llamada opcional nuevamente
log?.('This will also not be logged'); // No hay salida, ya que log es undefined
