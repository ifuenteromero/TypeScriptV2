// Simplify the following code snippets:

// 1.

// console.log(user && user.address ? user.address.street : undefined);
// console.log(user?.address?.street);

// 2.
// let x = foo !== null && foo !== undefined ? foo : bar();
// let x = foo ?? bar();

// What is the problem in this piece of code?

let value: unknown = 'a';
// console.log(value.toUpperCase());
// Error: Property 'toUpperCase' does not exist on type 'unknown'.

// value is declared as an unknown type. In order to call methods on an unknown object,
// we have to use type narrowing first:
// let value: unknown = 'a';
if (typeof value === 'string') console.log(value.toUpperCase());
