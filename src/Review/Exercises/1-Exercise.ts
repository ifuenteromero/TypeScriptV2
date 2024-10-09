//  Given the data below, define a type alias for representing users.
type User2 = {
	name: string;
	age: number;
	occupation?: string;
};

let users2: User2[] = [
	{
		name: 'John Smith',
		age: 30,
		occupation: 'Software engineer',
	},
	{
		name: 'Kate Müller',
		age: 28,
	},
];
