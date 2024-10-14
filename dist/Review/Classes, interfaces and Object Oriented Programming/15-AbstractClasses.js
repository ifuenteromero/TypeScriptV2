"use strict";
class Shape2 {
    constructor(color, fill) {
        this.color = color;
        this.fill = fill;
    }
}
class Circle2 extends Shape2 {
    constructor(radius, color, fill) {
        super(color, fill);
        this.radius = radius;
    }
    render() {
        console.log('Rendering Circle');
    }
}
//# sourceMappingURL=15-AbstractClasses.js.map