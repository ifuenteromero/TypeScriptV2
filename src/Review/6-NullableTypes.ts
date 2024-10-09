// const greet = (name: string) => {
// 	console.log(`Hello, ${name}!`);
// };

// greet(null); //ts(2345) Error: Argument of type 'null' is not assignable to parameter of type 'string'.

const greet = (name: string | null) => {
	if (name) console.log(`Hello, ${name}!`);
	else console.log('Hello!');
};

greet(null); // Hello!

const greet2 = (name: string | null | undefined) => {
	if (name) console.log(`Hello, ${name}!`);
	else console.log('Hello!');
};

greet2(undefined); // Hello!
