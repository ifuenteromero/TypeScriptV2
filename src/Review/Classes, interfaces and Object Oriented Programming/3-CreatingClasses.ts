/*  A class is a blueprint for creating objects. Is like an object factory. The terms class and object 
are often used interchangeably */

class Account2 {
	readonly id: number;
	owner: string;
	balance: number;
	nickname?: string;

	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		this.balance += amount;
	}
}

let account2 = new Account2(1, 'Irene', 6_000);
account2.deposit(2_200);

console.log({ account2 });
console.log(typeof account2);
console.log({ isAnInstance: account2 instanceof Account2 });

// tsc && node dist/Review/Classes\,\ interfaces\ and\ Object\ Oriented\ Programming/3-CreatingClasses.js
