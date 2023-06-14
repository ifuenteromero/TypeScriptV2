"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.calculateTax();
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    calculateTax() {
        console.log('hola');
    }
}
let account = new Account(1, 'Ireene', 10);
account.deposit(15000);
console.log(typeof account);
console.log(account instanceof Account);
console.log({ account });
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment;
seats.A1 = 'Mosh';
seats.A2 = 'Irene';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride;
ride1.start();
let ride2 = new Ride;
ride2.start();
console.log({ activeRides: Ride.activeRides });
//# sourceMappingURL=CreatingClasses.js.map