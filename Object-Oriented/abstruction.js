// Explore Abstraction concept in OOP

class Animal {
    constructor() { }
    talk() {
        throw Error('You must inplement talk method');
    }
}

class Cat extends Animal {
    talk() {
        console.log('Meo Meo');
    }
}

class Dog extends Animal {
    talks() {
        console.log('Bag bag');
    }

    talk() {
        console.log('Geo Geo');
    }
}


const cat = new Cat();
cat.talk();

const dog = new Dog();
dog.talks();
dog.talk();