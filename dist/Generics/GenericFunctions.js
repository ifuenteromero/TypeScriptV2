"use strict";
const wrapInArray = (value) => [value];
const numbers = wrapInArray(1);
const strings = wrapInArray('apple');
class ArrayUtils {
    wrapInArrayFunction(value) {
        return [value];
    }
}
const numbers2 = new ArrayUtils();
numbers2.wrapInArrayFunction(2);
class ArrayUtils2 {
    static wrapInArrayFunction(value) {
        return [value];
    }
}
const number3 = ArrayUtils2.wrapInArrayFunction(3);
//# sourceMappingURL=GenericFunctions.js.map