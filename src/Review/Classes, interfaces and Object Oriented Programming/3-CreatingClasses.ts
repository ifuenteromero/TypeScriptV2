/*  A class is a blueprint for creating objects. Is like an object factory. The terms class and object 
are often used interchangeably */

class Account2 {
	id: number;
	owner: string;
	balance: number;

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
