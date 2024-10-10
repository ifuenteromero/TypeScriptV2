"use strict";
const greet = (name) => {
    if (name)
        console.log(`Hello, ${name}!`);
    else
        console.log('Hello!');
};
greet(null);
const greet2 = (name) => {
    if (name)
        console.log(`Hello, ${name}!`);
    else
        console.log('Hello!');
};
greet2(undefined);
//# sourceMappingURL=6-NullableTypes.js.map