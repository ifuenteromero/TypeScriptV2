/*  A class is a blueprint for creating objects. Is like an object factory. The terms class and object 
are often used interchangeably */

class Account2 {
	readonly id: number;
	owner: string;
	private _balance: number;
	nickname?: string;

	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this._balance = balance;
	}

	getBalance(): number {
		return this._balance;
	}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		this._balance += amount;
	}
}

let account2 = new Account2(1, 'Irene', 6_000);
account2.deposit(2_200);

console.log({ account2 });
console.log(typeof account2);
console.log({ isAnInstance: account2 instanceof Account2 });

// tsc && node dist/Review/Classes\,\ interfaces\ and\ Object\ Oriented\ Programming/3-CreatingClasses.js

// Access control modifiers
// public by default
// private
// protected

// Por ejemplo no queremos que esto se pueda hacer
// account2.balance = -10; la propiedad balance es privada
// qué pasa si queremos recuperar el balance?
// account2.balance; // Property 'balance' is private and only accessible within class 'Account2'.
// creamos getBalance
// console.log(account2.getBalance());
