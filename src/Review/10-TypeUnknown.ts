/**
 * Renders a document based on its type.
 *
 * If the document is a string, it converts it to uppercase.
 * If the document is an instance of `ExampleClass`, it calls the `fly` method.
 * Otherwise, it logs that the document is not of type `ExampleClass`.
 *
 * @param document - The document to render, which can be of any type.
 *
 * @example
 * ```typescript
 * const example1 = new ExampleClass();
 * const example2 = 'This is a string';
 * const example3 = { quack: () => console.log('Quacking!') };
 *
 * render(example1); // Output: "Flying!"
 * render(example2); // Output: "THIS IS A STRING"
 * render(example3); // Output: "Document is not of type ExampleClass"
 * ```
 */
//  The type unknown is a type-safe counterpart of any. It is a type that represents any
//  value, but it is safer to use than any because it is not assignable to other types
//  without a type assertion or a control flow-based narrowing.

// const render = (document: any) => {
// 	document.fly();
// 	document.quack();
// 	document.bark();
// 	document.whatever();
// 	// no type checking
// };

type ExampleType = {
	fly: () => void;
};

class ExampleClass implements ExampleType {
	fly() {
		console.log('Flying!');
	}
}

const render = (document: unknown) => {
	// document.fly(); // Error: Property 'fly' does not exist on type 'unknown'.
	if (typeof document === 'string') {
		document.toUpperCase();
	} else if (document instanceof ExampleClass) {
		document.fly();
	} else {
		console.log('Document is not of type ExampleClass');
	}
};

// Ejemplos de uso
const example1 = new ExampleClass();
const example2 = 'This is a string';
const example3 = { quack: () => console.log('Quacking!') };

render(example1); // Salida: "Flying!"
render(example2); // Salida: "THIS IS A STRING"
render(example3); // Salida: "Document is not of type ExampleClass"
