class Account {
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

let account = new Account(1, 'Ireene', 10);
account.deposit(15_000);
console.log(typeof account);
console.log(account instanceof Account);

