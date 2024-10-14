// Generic classes
// Generic classes are classes that take a type as a parameter. They are classes that are parameterized over types.
// El problema:

// Imaginemos que queremos crear una clase que almacena claves y valores

class KeyValuePair2 {
	constructor(public key: number, public value: string) {}
}

const pair5 = new KeyValuePair2(2, 'tes');

// Qué ocurre si quiero new KeyValuePair2('3', 'otro')
// no puedo hacerlo porque la key debe ser un número
// Podría por ejemplo crear otra clase StringKeyValuePair donde la key sea un string en lugar de un número, pero esto no es escalable

// otra opción es usar genéricos

class KeyValuePairGeneric<T, U> {
	constructor(public key: T, public value: U) {}
}
