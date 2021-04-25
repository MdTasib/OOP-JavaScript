// how to declare class method and use properties from inside

class Person {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if (this.power) {
            return this.power;
        }
        return 'I have no power';
    }
}

const tasib = new Person('Tasib', 'Developer');
// const tasib = new Person('Tasib');
console.log(tasib.power);
console.log(tasib.getPower());