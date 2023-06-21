class KeyParValueGeneric<K, V> {
    constructor(public key: K, public value: V) {

    }
}

const pair3 = new KeyParValueGeneric<string, boolean>('2', true);
const pair4 = new KeyParValueGeneric(true, false)