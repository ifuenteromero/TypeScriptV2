abstract class Shape {
    constructor(public color: string) {
    }

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }

    render(): void {
        console.log('Render a circle');

    }
}

const circle = new Circle(1, 'red');
circle.render()
