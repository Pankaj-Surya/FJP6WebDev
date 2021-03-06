// Description: Find output of the following:

// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

// Options: A) Error

// B) 14 14

// C) [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 } [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }

// D) undefined undefined


function f() { console.log(arguments); }

function f(a, b) { return a + b; }

console.log(f(2, 3, 4, 5));//14

function f(x, y, z, t) { return x + y + z + t; }

console.log(f(2, 3, 4, 5));