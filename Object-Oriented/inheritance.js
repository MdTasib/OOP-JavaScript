// Inheritance with smart device example

class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log('I am eating electrons.. They yummy.');
    }
}

class Mobile extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    review() {
        console.log('Splendid');
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price);
        this.isWifi = isWifi;
    }
}


const sumsung = new Mobile('Sumsung', 45000, '16GB');
sumsung.charging();
console.log(sumsung);