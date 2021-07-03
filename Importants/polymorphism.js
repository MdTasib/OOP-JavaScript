// polymorphism holo parent er kiso child change korar pokria.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

class Developer extends Person {
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {
        super.play();
        console.log(`${this.name} is playing football`);
    }
}

const tasib = new Developer('Tasib', 19, 'Front End', 'Bangladesh');
tasib.play();