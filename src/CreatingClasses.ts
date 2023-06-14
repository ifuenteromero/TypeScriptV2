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

    // getBalance(): number {
    //     return this._balance;
    // }

    get balance(): number {
        return this._balance
    }

    // set balance(value: number) {
    //     if (value <= 0) throw new Error('invalid value');
    //     this._balance = value
    // }

    private calculateTax(): void {
        console.log('hola');

    }
}

let account = new Account(1, 'Ireene', 10);
account.deposit(15_000);
console.log(typeof account);
console.log(account instanceof Account);
// console.log(account.balance)
// console.log(account.getBalance());
console.log({ account });
console.log(account.balance);
// account.balance = 2;

class SeatAssignment {
    // index signature string
    [seatNumber: string]: string;
}

let seats = new SeatAssignment;
seats.A1 = 'Mosh';
seats.A2 = 'Irene'


class Ride {
    private static _activeRides: number = 0;

    start() {
        Ride._activeRides++
    }

    stop() {
        Ride._activeRides--
    }

    static get activeRides(): number {
        return Ride._activeRides
    }
}

let ride1 = new Ride;
ride1.start()

let ride2 = new Ride;
ride2.start()

console.log({ activeRides: Ride.activeRides });


