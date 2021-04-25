// how to declare a class using class and function syntax

// class syntax
class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const hp = new PenDrive('16GB', 'green', 650);
console.log(hp);

const sumsung = new PenDrive('36GB', 'white', 1100);
console.log(sumsung);

// function syntax
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const personOne = new Person('Tasib', 19);
console.log(personOne);

const personTwo = new Person('Rafi', 22);
console.log(personTwo);