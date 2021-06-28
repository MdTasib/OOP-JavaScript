/*
const x = 2;

const sum = () => {
    const y = 3;
    return () => {
        return x + y;
    }
}

const myFunc = sum();
console.log(myFunc);
*/

/*

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return function () {
        return balance;
    }
}

let account = bankAccount(1000);
console.dir(account);
*/

/*
var num1 = 2;
var num2 = 3;

var sum = function () {
    return num1 + num2;
}

console.log(sum());
console.dir(sum);
*/

/*
function stopWatch() {
    var startWatch = Date.now();

    function getDelay() {
        console.log(Date.now() - startWatch);
    }

    return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 100000000; i++) {
    var a = Math.random() * 1000000;
}

// timer();
console.dir(timer);
*/

/*
var a;

function async() {
    a = 20;

    var myFunc = () => {
        console.log(a);
    }
    setTimeout(myFunc, 3000);

    console.dir(myFunc);
}

async();

a = 30;
*/