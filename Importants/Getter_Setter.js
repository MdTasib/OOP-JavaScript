class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }

    eat() { // method
        console.log(`${this.name} is eating`);
    }

    // getter
    get setName() {
        return this.name;
    }

    // setter
    set changeName(name) {
        this.name = name;
    }

    static isStatic() {
        return this.name;
    }
}

const tasib = new Person('Tasib', 19);

console.log(tasib.name);
tasib.changeName = 'Ohidul';
console.log(tasib.name);

console.log(Person.isStatic()); // static method call korte hoi class er name dia. seta asolei static. tai this class Person mone korse.