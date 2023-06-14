class Account {
    readonly id: number;
    owner: string;
    private balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error('Invalid amount');
        this.calculateTax();
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }

    private calculateTax(): void {
        console.log('hola');

    }
}

let account = new Account(1, 'Ireene', 10);
account.deposit(15_000);
console.log(typeof account);
console.log(account instanceof Account);
// console.log(account.balance)
console.log(account.getBalance());
console.log({ account });



