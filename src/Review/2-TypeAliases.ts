// dado este objeto

// let employee: {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// } = {
// 	id: 1,
// 	name: 'Irene',
// 	retire: (date: Date) => console.log(date),
// };

// para poder reutilizar el tipo de este objeto, se puede hacer un alias de tipo

// PascaleCase
type Employee2 = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee: Employee2 = {
	id: 1,
	name: 'Irene',
	retire: (date: Date) => console.log(date),
};
