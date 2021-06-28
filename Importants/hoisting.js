// Hoisting
// var vs let, const
// function

/*
// var
// 1
console.log(b);
var b = 'Ball';

// 2
var a;
console.log(a);
a = 'Bangladesh';
console.log(a);
*/

/*
// let
console.log(c);
let c = 'cat';
*/

/*
// var
var NAME = 'TASIB';
var name = 'tasib';

function getName() {
    if (!name) {
        var name = NAME;
    }
    return name;
}
console.log(`I love ${getName()}`);

// let
let LANGUAGE = 'JAVASCRIPT';
let language = 'javascript';

function getLanguage() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getLanguage()}`);
*/