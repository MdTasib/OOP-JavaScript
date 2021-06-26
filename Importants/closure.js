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

// /*

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return function () {
        return balance;
    }
}

let account = bankAccount(1000);
console.dir(account);