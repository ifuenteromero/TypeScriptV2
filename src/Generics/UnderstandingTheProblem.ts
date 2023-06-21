// El problema que queremos resolver con estos elementos genéricos es el siguiente
// Imagina que queremos representar una clase KeyValuePair

class KeyValuePair {
    constructor(public key: number, public value: string) { }
}

// Creamos un objeto

const pair = new KeyValuePair(1, 'Apple');

// Qué pasa si queremos usar un objeto que tenga como key el string '1'
// con esta implementación no podríamos hacer const pair = new KeyValuePair('1', 'Apple');

// una solución es poner any en la key. Pero estonces perdemos typesafety intellisence
// No debemos usar any en general

// Otra solución sería crear otra clase 


class StringKeyValuePair {
    constructor(public key: string, public value: string) { }
}

const pair2 = new StringKeyValuePair('1', 'Apple');

// pero entonces seguimos teniendo problemas si por ejemplo queremos crear objetos en el value