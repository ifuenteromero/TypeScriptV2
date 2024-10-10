"use strict";
class ExampleClass {
    fly() {
        console.log('Flying!');
    }
}
const render = (document) => {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    else if (document instanceof ExampleClass) {
        document.fly();
    }
    else {
        console.log('Document is not of type ExampleClass');
    }
};
const example1 = new ExampleClass();
const example2 = 'This is a string';
const example3 = { quack: () => console.log('Quacking!') };
render(example1);
render(example2);
render(example3);
//# sourceMappingURL=10-TypeUnknown.js.map