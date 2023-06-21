const wrapInArray = <T>(value: T) => [value];
const numbers = wrapInArray(1);
const strings = wrapInArray('apple')


class ArrayUtils {
    wrapInArrayFunction<T>(value: T) {
        return [value]
    }
}

const numbers2 = new ArrayUtils();
numbers2.wrapInArrayFunction(2)


class ArrayUtils2 {
    static wrapInArrayFunction<T>(value: T) {
        return [value]
    }
}

const number3 = ArrayUtils2.wrapInArrayFunction(3)