// prototypical inheritance and design pattern

function Cat(name) {
    this.name = name;
}
Cat.prototype.talk = function () {
    console.log('meo meo');
}

const myCat = new Cat('Taiget');
console.log(myCat);
myCat.talk();