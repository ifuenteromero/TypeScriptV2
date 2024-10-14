// Abstract classes are classes that cannot be instantiated directly. They are uncompleted. They are meant to be used as base classes.

// An abstract class is a class with partial implementation. Abstract classes cannot be
// instantiated and have to be inherited

// Circle, Square, and Triangle are shapes. They have common properties like color and fill.
// They also have common methods like draw and area. We can create an abstract class called
// Shape with these properties and methods.

abstract class Shape2 {
	constructor(public color: string, public fill: boolean) {}
	abstract render(): void;
}

class Circle2 extends Shape2 {
	constructor(public radius: number, color: string, fill: boolean) {
		super(color, fill);
	}

	override render(): void {
		console.log('Rendering Circle');
	}
}

// let shape = new Shape2('red', true); // Error: Cannot create an instance of an abstract class
