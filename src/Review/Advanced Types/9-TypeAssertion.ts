/**
 * Type assertion example.
 *
 * This code demonstrates how to use type assertions in TypeScript to inform the compiler about the specific type of a DOM element.
 *
 * - The first example uses the `as` syntax to assert that the element with the ID 'phone' is an `HTMLInputElement`.
 * - The second example uses the angle-bracket syntax to assert that the element with the ID 'input' is an `HTMLInputElement`.
 *
 * Note:
 * Type assertions do not change the runtime type of the element; they only inform TypeScript to treat the element as the specified type.
 * If the element is not actually an `HTMLInputElement`, accessing properties like `value` will result in a runtime error.
 */
// Type assertion
const phone = document.getElementById('phone') as HTMLInputElement;
phone.value;

// otra sintaxis
const input = <HTMLInputElement>document.getElementById('input');

// el type assertion no lo convierte en un tipo diferente, solo le dice a TS que lo trate como tal
// si input no es un HTMLInputElement, phone.value dará error en tiempo de ejecución
