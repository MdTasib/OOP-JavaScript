//  map, filter, find, smart way to run for loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1
// const squareNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     squareNumbers.push(result);
// }
// console.log(squareNumbers);

// 2
// function square(element) {
//     return element * element;
// }
// const result = square(5);
// console.log(result)

// 3
// map
// numbers.map(function (element, index, array) {
//     // console.log(element, index, array);
//     const result = element * element;
//     console.log(result);
// })

// 4
// const result = numbers.map(element => element * element);
// console.log(result);

// find
// 1
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > 5) {
//         // console.log(element);
//         result.push(element);
//     }
// }
// console.log(result);

// 2
// const bigger = numbers.filter(function (x) {
//     return x > 5;
// });
// console.log(bigger);

// 3
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

// const students = [
//     { id: 11, name: 'tasib' },
//     { id: 22, name: 'rafi' },
//     { id: 33, name: 'rakib' }
// ];

// 1
// const result = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name;
//     result.push(name);
// }
// console.log(result);

// // 2 --> map
// const studentsName = students.map(x => x.name);
// console.log(studentsName);

// // 3 --> filter
// const ids = students.filter(x => x.id > 20);
// console.log(ids)

// Array slice, splice, array join elements
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// slice
// const numsSlice = nums.slice(2, 5);
// console.log(numsSlice);
// console.log(nums)

// splice 
// 1
// const numsSplice = nums.splice(2, 5); // index number 2 er por teke 5 ta element delete.
// console.log(numsSplice);
// console.log(nums);

// 2
// const numsSplice = nums.splice(2, 5, 10, 11, 12, 13); // index number 2 er por teke 5 ta element delete korde and sei jaiga golote noton element golo add hoa jabe.
// console.log(numsSplice);
// console.log(nums);


// join
// const numsJoin = nums.join(',');
// const numsJoinTwo = nums.join('/');
// const numsJoinThree = nums.join(' hello ');
// console.log(numsJoin);
// console.log(numsJoinTwo);
// console.log(numsJoinThree);

// synchronous vs asynchronous function
// // synchronous
// console.log(`Task 1`);
// console.log(`Task 2`);
// console.log(`Task 3`);
// console.log(`Task 4`);

// asynchronous
// function taskOne() {
//     console.log(`Task 1`);
// }

// // asyncronous function
// function taskTwo() {
//     setTimeout(() => {
//         console.log(`Task 2`);
//     }, 1000)
// }
// function taskThree() {
//     console.log(`Task 3`);
// }
// function taskFour() {
//     console.log(`Task 4`);
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour()

// callback and higher order function
// 1 -> don't use callback function
// function taskOne() {
//     console.log(`Task 1`)
// }
// function taskTwo() {
//     setTimeout(() => {
//         console.log(`Task 2`);
//     }, 1000)
// }
// function taskThree() {
//     console.log(`Task 3`);
// }
// function taskFour() {
//     console.log(`Task 4`);
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour()

// 2 useing callback function
// function taskOne(callback) {
//     console.log(`Task 1`)
//     callback()
// }
// function taskTwo(callback) {
//     setTimeout(() => {
//         console.log(`Task 2`);
//         callback()
//     }, 1000)
// }
// function taskThree(callback) {
//     console.log(`Task 3`);
//     callback()
// }
// function taskFour() {
//     console.log(`Task 4`);
// }

// // callback function
// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour()
//         })
//     })
// })

// promise
// createing promise
// const promiseOne = new Promise((resolve, reject) => {
//     let completePromise = true;
//     if (completePromise) {
//         resolve(`completed promiseOne`)
//     } else {
//         // 1
//         reject(`not completed promiseOne`)
//         // 2
//         // reject(new Error(`not completed promiseOne`))
//     }
// });
// // useing this promise
// promiseOne
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         // 1
//         console.log(error)
//         // 2
//         // console.log(error.message)
//     })

// promise all
// const promise1 = new Promise((resolve, reject) => {
//     resolve(`i am promise 1`);
// });
// const promise2 = new Promise((resolve, reject) => {
//     resolve(`i am promise 2`)
// });

// Promise.all([promise1, promise2])
//     .then((response) => {
//         console.log(response);
//     })

// promise race
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`i am promise 1`), 2000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`i am promise 2`), 1000)
// });

// Promise.race([promise1, promise2])
//     .then((response) => console.log(response));


// promise second way
// function taskOne() {
//     return new Promise((resolve, reject) => {
//         resolve(`i am task one`)
//     })
// }
// function taskTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`i am task Two`)
//         }, 2000)
//     })
// }
// function taskThree() {
//     return new Promise((resolve, reject) => {
//         resolve(`i am task Three`)
//     })
// }
// function taskFour() {
//     return new Promise((resolve, reject) => {
//         resolve(`i am task Four`)
//     })
// }

// taskOne()
//     .then((res) => console.log(res))
//     .then(taskTwo)
//     .then((res) => console.log(res))
//     .then(taskThree)
//     .then((res) => console.log(res))
//     .then(taskFour)
//     .then((res) => console.log(res))


// // bind use in Object
// const person = {
//     firstName: 'Ohidul',
//     lastName: 'Alam',
//     selary: 1000,
//     getFullname: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
//     getAmount: function (amount) {
//         this.selary = this.selary - amount;
//         return this.selary;
//     }
// }

// const friend = {
//     firstName: 'Rafi',
//     selary: 2000
// }

// friendCharge = person.getAmount.bind(friend);
// console.log(friendCharge(200))

// // call and apply use in Object
// const person = {
//     firstName: 'Ohidul',
//     lastName: 'Alam',
//     selary: 20000,
//     getFullname: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
//     getAmount: function (amount, tax) {
//         this.selary = this.selary - (amount + tax);
//         return this.selary;
//     }
// }
// const friend = {
//     firstName: 'Rafi',
//     selary: 2000
// }
// // call
// // person.getAmount.call(friend, 1000, 100);
// // console.log(friend.selary);
// // console.log(person.selary);

// // apply
// person.getAmount.apply(friend, [1000, 100]); // argument golo array kore pass korte hoi
// console.log(friend.selary);
// console.log(person.selary);

// // class and object difference
// // Object
// const obj = {
//     name: 'tasib',
//     age: 19,
//     country: 'bangladesh'
// }
// console.log(obj)

// // class
// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
// }
// console.log(new Person('tasib', 19, 'bangladesh'));

// async await how to use it for async call (1)
// 1
// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displayData(data))
// }
// loadData();

// 2
// async function loadData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     return data;
// }

// loadData().then(data => {
//     displayData(data)
// })

// function displayData(data) {
//     const ul = document.getElementById('list');
//     for (let i = 0; i < data.length; i++) {
//         const users = data[i];
//         const li = document.createElement('li');
//         li.innerText = users.name;
//         ul.appendChild(li);
//     }
// }

// // Callback Not Always Asynchronous in Javascript
// // synchronous
// let arr = [1, 2, 3, 4, 5];
// let sqrArr = arr.map((v) => v * v);
// console.log(sqrArr);

// function asyncMap(arr, cb) {
//     return arr.map(v => {
//         // setTimeout(cb.bind(null, v), 0);
//         setTimeout(() => cb(v), 0)
//     })
// }
// let qbArr = asyncMap(arr, (v) => { console.log(v) });
// console.log(qbArr);

// // Introduction to Promise in Javascript
// /*
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'This is p1');
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'This is P2');
// })

// p1.then((p1value) => {
//     console.log(p1value);
// })
// p2.then((p2value) => {
//     console.log(p2value);
// })
// */

// function getMobile(isPassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPassed) {
//                 resolve('I have got a Mobile Phohe');
//             } else {
//                 reject(new Error('You are failed'));
//             }
//         }, 1000)
//     })
// }
// getMobile(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })


// // async iterator in javascript
// let asyncIterable = {
//     [Symbol.asyncIterable]() {
//         let i = 0;
//         return {
//             next() {
//                 if (i < 5) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }


// let iterator = asyncIterable[Symbol.asyncIterable]();

// (async function () {
//     console.log(await iterator.next());
//     console.log(await iterator.next());
//     console.log(await iterator.next());
//     console.log(await iterator.next());
//     console.log(await iterator.next());
//     console.log(await iterator.next());
// })()

// // Async Generators in Javascript
// async function* myAsyncGenerator() {
//     let i = 0;
//     while (true) {
//         if (i > 5) return
//         yield Promise.resolve(i++)
//     }
// }

// ; (async function () {
//     for await (let v of myAsyncGenerator()) {
//         console.log(v);
//     }
// })()


// What is "this" in JavaScript - .call(), .apply() and .bind()

// implicit binding
// const person = {
//     name: 'Tasib',
//     age: 19,
//     printName: function () {
//         console.log(this);
//         console.log(this.name);
//     },
// }
// person.printName();

// const person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () { console.log(this.name) },
//         brother: {
//             name: 'Rafi',
//             age: 21,
//             // printName: function () { console.log(this) },
//             printName: function () { console.log(this.name) },
//         }
//     }
// }
// const tasib = person('Tasib', 19);
// tasib.printName();
// tasib.brother.printName();

// explicit binding
// let printName = function () {
//     console.log(this.name);
// }

// let person = {
//     name: 'Tasib',
//     age: 19
// }
// printName.call(person);
// printName.apply(person);
// const hello = printName.bind(person);
// hello();

// new binding
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`);
// }
// const tasib = new Person('Tasib', 19);


// Higher Order Functions

// example 1
// without higher order function
// let numbers = [1, 2, 3, 4];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
// }
// console.log(result);

// // with higher order function
// let arrNumbers = [1, 2, 3, 4, 5];
// const resultNumber = arrNumbers.map(function (number) {
//     return number * 2
// });
// console.log(resultNumber);

// // example 2

// let players = [
//     { name: 'Liton', avg: 42 },
//     { name: 'Tamim', avg: 37 },
//     { name: 'Sakib', avg: 33 },
//     { name: 'Musfiq', avg: 34 },
//     { name: 'Taskin', avg: 31 },
// ]

// // without higher order function

// // const playerAvgBigerThirtyfive = [];
// // for (let i = 0; i < players.length; i++) {
// //     if (players[i].avg >= 35) {
// //         playerAvgBigerThirtyfive.push(players[i])
// //     }
// // }
// // console.log(playerAvgBigerThirtyfive);

// // with higher order function
// const playerAvgBigerThirtyfive = players.filter(function (player) {
//     return player.avg >= 35;
// });
// console.log(playerAvgBigerThirtyfive);

// What is Currying in JavaScript
// useing currying

// function discount(disc) {
//     return (price) => {
//         return price - price * disc;
//     }
// }

// let tenPercentDiscount = discount(0.1);
// let customer1 = tenPercentDiscount(500);
// let customer2 = tenPercentDiscount(600);

// console.log(customer1);
// console.log(customer2);

