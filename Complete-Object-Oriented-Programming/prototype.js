/**
 * Prototype and Prototypical Inheritance in Javascript
 */

// Create Object using Function Constructor
const Person = function (name, age) {
	this.name = name;
	this.age = age;

	// don't use prototype
	// this.about = function () {
	// 	console.log(`This is ${this.name}. I'm ${this.age} years old`);
	// };
};

// useing prototype
Person.prototype.about = function () {
	console.log(`This is ${this.name}. I'm ${this.age} years old`);
};

const tasib = new Person("Tasib", 20);
const rakib = new Person("Rakib", 20);
console.log(tasib);
console.log(rakib);
tasib.about();

// now i can change filter method in array
// console.log(new Array()); // use can see prototype on expant this array

// example when using default filter method
const ages = [3, 5, 7, 2, 4, 18, 13, 22];
const evenAges = ages.filter(age => age % 2 === 1);
console.log(evenAges);

// example when using change default filter method
const arr = [3, 5, 7, 2, 4, 18, 13, 22];

Array.prototype.filter = function () {
	const newArr = [];

	for (let i = 0; i < this.length; i++) {
		// console.log(this[i]);
		if (this[i] % 2 === 0) {
			newArr.push(this[i]);
		}
	}
	return newArr;
};

console.log(arr.filter());

// example chage default filter method
const ages2 = [3, 5, 7, 2, 4, 18, 13, 22];
const evenAges2 = ages2.filter(age => age % 2 === 1);
console.log(evenAges2);
