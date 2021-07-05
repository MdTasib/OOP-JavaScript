// higher order function holo hoi akta function onno function a pass kora hoi. otoba function onno akta function return kore

// let func = function hello() {
//     return function () {
//         console.log('Hello world');
//     }
// }

// func()();

/*
// example 1 without higher order function
let numbers = [1, 2, 3];

let result = [];

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
}
console.log(numbers);
console.log(result);
*/

/*
// example 1 with higher order function
let numbers = [1, 2, 3];
let result = numbers.map(number => number * 2);

console.log(numbers);
console.log(result);
*/

// example 2
let persons = [
    {
        name: 'Tasib',
        age: 19
    },
    {
        name: 'Rafi',
        age: 22
    },
    {
        name: 'Tanha',
        age: 26
    },
    {
        name: 'Rakib',
        age: 18
    }
]

/*
// example 2 without higher order function
let personWithAge20 = [];

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 20) {
        personWithAge20.push(persons[i]);
    }
}

console.log(personWithAge20);
*/

/*
// example 2 with higher order function
let personWithAge20 = persons.filter(person => person.age >= 20);
console.log(personWithAge20);
*/

// example 3 - array.map() build in by me
const languages = ['Javascript', 'Python', 'PHP', 'C'];

function mapTasib(arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }

    return newArray;
}

const myArray = mapTasib(languages, function (language) {
    return language;
});
console.log(myArray);