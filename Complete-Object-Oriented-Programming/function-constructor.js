/**
 * How to Create Object using Function Constructor in Javascript
 */

// normal object
/* const obj = {};
obj.name = "Tasib";
obj.age = 20;
console.log(obj); */

// Create Object using Function Constructor
const Person = function (name, age) {
	this.name = name;
	this.age = age;

	this.about = function () {
		console.log(`This is ${this.name}. I'm ${this.age} years old`);
	};
};

const tasib = new Person("Tasib", 20);
const rakib = new Person("Rakib", 20);
console.log(tasib);
console.log(rakib);
tasib.about();
