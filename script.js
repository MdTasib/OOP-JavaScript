// What is Currying in JavaScript
function discount(disc) {
    return (price) => {
        return price - price * disc;
    }
}

let tenPercentDiscount = discount(0.1);
let customer1 = tenPercentDiscount(500);
let customer2 = tenPercentDiscount(600);

console.log(customer1);
console.log(customer2);