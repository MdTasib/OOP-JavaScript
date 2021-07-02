// new key word don't use
// function Person(name, age) {
//     let person = Object.create(Person.prototype);

//     person.name = name;
//     person.age = age;

//     return person;
// }

// use new key word
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat() {
        console.log('person is eating');
    },
    sleep() {
        console.log('person is sleeping');
    },
    play() {
        console.log('person is playing');
    }
}

// new key word don't use
// const tasib = Person('tasib', 19);
// const rafi = Person('rafi', 22);

const tasib = new Person('ohidul', 19);
const rafi = new Person('shajalal', 22);
rafi.play();


// class convension  -- Person replace Human -- Because Person already declared
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('Human is eating');
    }
    play() {
        console.log('Human is playing');
    }
    sleep() {
        console.log('Human is sleeping');
    }
}

const rakib = new Human('Rakib', 18);
const tawrat = new Human('Tawrat', 12);
tawrat.play();