// Constraints

// Constraints allow you to specify that a type parameter must be a particular type.

const echo = <T>(value: T) => value;
echo(1);
echo('hola');
echo(true);

// Qué pasa si quiero limitar la función echo para que a pesar de que sea genérica no valga para cualquier type

const echo2 = <T extends number | string>(value: T) => value;
echo2(1);
echo2('hola');
// echo2(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

const echo3 = <T extends { name: string }>(value: T) => value;

// echo3(1); // Argument of type 'number' is not assignable to parameter of type '{ name: string; }'.ts(2345)
echo3({ name: '' });
echo3({ name: '', color: 'black' });

interface Person5 {
	name: string;
}

const echo4 = <T extends Person5>(value: T) => value;

echo4({ name: '' });
echo4({ name: '', color: 'black' });

class Person5 {
	constructor(public name: string) {}
}

class Customer5 extends Person5 {}

const echo5 = <T extends Person5>(value: T) => value;

echo5(new Person5(''));
echo5(new Customer5(''));

// any object that is a person
