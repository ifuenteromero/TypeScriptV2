"use strict";
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0)
            throw new Error('Invalid amount');
        this._balance = amount;
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
console.log({ balance: account2.balance });
account2.balance = 10000;
console.log({ balance: account2.balance });
//# sourceMappingURL=3-CreatingClasses.js.map