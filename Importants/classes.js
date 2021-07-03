// Prototype inheritance

function Person(name, age) { // parent class
    this.name = name;
    this.age = age;
}

function Developer(name, age, type, country) { // child class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.play = function () {
    console.log(`${this.name} is playing`);
}

const tasib = new Developer('Tasib', 19, 'Front End', 'Bangladesh');
console.log(tasib.eat());
console.log(tasib.play());


/*
// prototype chine
let f = function Human() { };

Object.prototype.tasib = function () {
    console.log('i am tasib');
}

let p = {};
p.tasib();
*/

// Convert Class
class Human { // Parent
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Programmer extends Human { // Child
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}

const rafi = new Programmer('Raft', 22, 'MERN Stack', 'Bangladesh');
console.log(rafi.name);
rafi.eat();