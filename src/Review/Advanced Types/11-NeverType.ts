// The never type
// The never type represents values that never occur.
// For example, a function that always throws an error or
// never returns a value has a return type of never.

function processEvents(): never {
	while (true) {
		console.log('Processing events...');
	}
}

function throwError(message: string): never {
	throw new Error(message);
}
// Si las pongo como arrow functions, no sale el warning de unreachable code
// processEvents();
throwError('This is an error!');

// console.log('This will never be reached!');
