function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}

const tasib = new Person('Tasib', 19);
console.log(tasib);
tasib.eat()
const rafi = new Person('Rafi', 22);
console.log(rafi);

/*
// prototype chine
let f = function Human() { };

Object.prototype.tasib = function () {
    console.log('i am tasib');
}

let p = {};
p.tasib();
*/