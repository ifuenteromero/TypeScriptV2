class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor(
        public id: number,
        public owner: string,
        private _balance: number
    ) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error('Invalid amount');
        this.calculateTax();
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
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



