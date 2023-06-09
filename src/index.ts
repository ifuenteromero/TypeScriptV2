const enum Size { Small = 3, Medium, Large }
let mySize: Size;
mySize = Size.Large
console.log(mySize);


const calculate = (income: number): number => {
    const test = 5_000_00;
    console.log({ test });

    if (income > test) return 3
    return 2

}

calculate(2);

let a = 100; let b = 'Coffee'; let c = [true, false, false];
let d = { age: 20 };
let e = [3]; let f; let g = []

const song: {
    title: string,
    releaseYear?: number
} = { title: 'My song' }

type Age = number

type User = {
    name: string,
    age: Age,
    occupation?: string
}

const users: User[] = [{ name: 'John Smith', age: 30, occupation: 'Software engineer' }, { name: 'Kate Müller', age: 28 }]

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

type Pet = Fish | Bird;

const pet: Pet = {
    swim: () => console.log('swim'),
}

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Monday'
const day: DayOfWeek = 'Monday'


