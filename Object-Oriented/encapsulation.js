// Different ways to achieve encapsulation in javascript

class Tiger {
    #spreed = 100; // private. can't chance value;
    location = 'Sondorban'; // private. chanve value;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`My name is ${this.name}. I am running ${this.#spreed}mph. I'm liveing ${this.location}`);
    }
}

const royel = new Tiger('Royel Bengle');

// royel.#spreed = 120; // Error
royel.location = 'Bandorbon';

royel.run();