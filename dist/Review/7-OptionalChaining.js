"use strict";
var _a;
const getCustomer = (id) => {
    return id === 0 ? null : { birthDate: new Date() };
};
const customer = getCustomer(0);
customer === null || customer === void 0 ? void 0 : customer.birthDate;
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
const customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthDate);
let customers;
customers = null;
const test = customers === null || customers === void 0 ? void 0 : customers[0];
let log;
log === null || log === void 0 ? void 0 : log('This will be logged');
log === null || log === void 0 ? void 0 : log('This will not be logged');
console.log('test');
console.log((log === null || log === void 0 ? void 0 : log('This will not be logged')) + 'test');
log === null || log === void 0 ? void 0 : log('This will also not be logged');
//# sourceMappingURL=7-OptionalChaining.js.map