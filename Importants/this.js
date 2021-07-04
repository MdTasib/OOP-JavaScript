// implecit binding
// explecit binding
// new binding
// window binding

// implecit binding -- jekane this use kora hoase. sei method take call korar somoi (tasib.printName()) - jota - printName() k call korar somoi tar age ( . ) dot jeta ase. tik tar ager ta ( tasib ) hosse this. NOTE: arrow function er somoi binno vabe kaj kore

/*
// 1
let tasib = {
    name: 'Tasib',
    age: 19,
    printName: function () {
        console.log(this.name);
    }
}

tasib.printName();
*/

/*
// 2
let printNameFunction = function (obj) {
    obj.printName = function () {
        console.log(this.name);
    }
}

const rafi = {
    name: 'Rafi',
    age: 22,
}

const rakib = {
    name: 'Rakib',
    age: 18
}

printNameFunction(rafi);
printNameFunction(rakib);

rafi.printName();
rakib.printName();
*/

/*
// 3
let Person = function (name, age) {
    return {
        name,
        age,
        printName: function () {
            console.log(this.name);
        },
        brother: {
            name: 'Rafi',
            age: 22,
            printName: function () {
                console.log(this.name);
            }
        }
    }
}

const tasib = Person('Tasib', 19);
tasib.printName();
tasib.brother.printName();
*/

/*
// explecit binding
let printName = function (v1, v2) {
    console.log(`${this.name} is ${v1}, ${v2}`);
}

let tasib = {
    name: 'Tasib',
    age: 19
}

const v1 = 'Student';
const v2 = 'Developer';

// call method first argument a nibe. ami jake this hisebe use korte sai seita. tasib object ta this hisebe use koresi. tarpor joto essa argument pass korte pari.

// call
printName.call(tasib, v1, v2);
// bind -- bind method value tak return kore de. tai onno variable a store korte hoi.
const person = printName.bind(tasib, v1, v2);
person();
*/

/*
// new binding
function Person(name, age) {
    this.name = name,
        this.age = age,
        console.log(`${this.name} is ${age} years old`);
}

let tasib = new Person('Tasib', 19);
*/

// window binding
"use strict"; // use strict default behevior off kore de

let printName = function () {
    console.log(this.name);
}

const tasib = {
    name: 'Tasib',
    age: 19
}

printName();