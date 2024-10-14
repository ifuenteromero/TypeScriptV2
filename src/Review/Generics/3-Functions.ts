// Generic functions and methods
// Generic functions are functions that can work with any type. They are functions that are parameterized over types.

const wrapNumberInArray = (value: number) => [value];
const wrapStringInArray = (value: string) => [value];

const wrapInArray2 = <T>(value: T) => [value];

const numberArray = wrapNumberInArray(1);
const numberArray2 = wrapInArray2<number>(2);

interface Person6 {
	name: string;
}

const person12: Person6 = { name: 'Irene' };

const personArray = wrapInArray2<Person6>(person12);

class ArrayUtils3 {
	static wrapInArrayMethod<T>(value: T) {
		return [value];
	}
}

const personArray2 = ArrayUtils3.wrapInArrayMethod(person12);
