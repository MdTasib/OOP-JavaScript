//  map, filter, find, smart way to run for loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1
// const squareNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     squareNumbers.push(result);
// }
// console.log(squareNumbers);

// 2
// function square(element) {
//     return element * element;
// }
// const result = square(5);
// console.log(result)

// 3
// map
// numbers.map(function (element, index, array) {
//     // console.log(element, index, array);
//     const result = element * element;
//     console.log(result);
// })

// 4
// const result = numbers.map(element => element * element);
// console.log(result);

// find
// 1
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > 5) {
//         // console.log(element);
//         result.push(element);
//     }
// }
// console.log(result);

// 2
// const bigger = numbers.filter(function (x) {
//     return x > 5;
// });
// console.log(bigger);

// 3
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);