// Javascript Basic Object Creation

// const obj = {};
// const obj1 = new Object;
// console.log(obj);
// console.log(obj1);

// simple object
let book = {
    name: 'Functional Javascript',
    author: 'Micbael Fogus',
    page: 250,

    print: function () {
        console.log(this.name, this.author);
    }
}

book.print();

console.log('Name : ', book.name); // first way
console.log('Author : ', book['author']) // second way

book.publisher = 2010;
console.log(book) // new key adding

// object traverse
for (let obj in book) {
    // console.log(obj) // only object key print

    // console.log(book.obj) // don't print value. this is wrong way

    console.log(obj + ' = ' + book['obj'])
}
