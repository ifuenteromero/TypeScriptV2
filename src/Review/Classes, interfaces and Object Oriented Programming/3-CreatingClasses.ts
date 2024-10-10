/*  A class is a blueprint for creating objects. Is like an object factory. The terms class and object 
are often used interchangeably */

class Account2 {
	nickname?: string;

	constructor(
		readonly id: number,
		public owner: string,
		private _balance: number
	) {}

	get balance(): number {
		return this._balance;
	}

	set balance(amount: number) {
		if (amount < 0) throw new Error('Invalid amount');
		this._balance = amount;
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

// Parameters properties
// A shorthand for defining properties in a constructor

// Getters and setters
// hasta ahora para acceder al balance hemos ccreado getBalance, no sería
// console.log({ balance: account3.balance }); más sencillo? Para ello creamos un getter

console.log({ balance: account2.balance });

// Así seguimos sin poder modificar el balance de esta manera
// account2.balance = -10; // Cannot assign to 'balance' because it is a read-only property.

// Si quisieramos hacerlo, validando que el balance no sea negativo, creamos un setter
// account2.balance = -10; // Invalid amount
account2.balance = 10_000;
console.log({ balance: account2.balance });
