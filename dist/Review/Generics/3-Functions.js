"use strict";
const wrapNumberInArray = (value) => [value];
const wrapStringInArray = (value) => [value];
const wrapInArray2 = (value) => [value];
const numberArray = wrapNumberInArray(1);
const numberArray2 = wrapInArray2(2);
const person12 = { name: 'Irene' };
const personArray = wrapInArray2(person12);
class ArrayUtils3 {
    static wrapInArrayMethod(value) {
        return [value];
    }
}
const personArray2 = ArrayUtils3.wrapInArrayMethod(person12);
//# sourceMappingURL=3-Functions.js.map