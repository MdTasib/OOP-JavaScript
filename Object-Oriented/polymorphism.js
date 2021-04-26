// Understand polymorphism using a simple example

class Circle {
    constructor(redius) {
        this.redius = redius;
    }
    area() {
        return Math.PI * Math.pow(this.redius, 2);
    }
}

class Ractangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    area() {
        return this.base * this.height / 2;
    }
}


const shapes = [new Circle(10), new Ractangle(10, 5), new Triangle(10, 10)];

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area());
}