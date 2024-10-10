"use strict";
class Account2 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
}
let account2 = new Account2(1, 'Irene', 6000);
account2.deposit(2200);
console.log({ account2 });
console.log(typeof account2);
console.log({ isAnInstance: account2 instanceof Account2 });
//# sourceMappingURL=3-CreatingClasses.js.map