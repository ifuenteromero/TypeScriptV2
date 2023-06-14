"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let account = new Account(1, 'Ireene', 10);
account.deposit(15000);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());
console.log({ account });
//# sourceMappingURL=CreatingClasses.js.map