"use strict";
//                              Task 4
Object.defineProperty(exports, "__esModule", { value: true });
//4) Functions:
//• Set up two different variables with different values.
//• Call a function with these variables as arguments and output the result using console.log.
//• Create a second call to the function with two more numbers as argument.
// Step 1: Set up two variables with different values
let num1 = 5;
let num2 = 10;
// Step 2: Define a function that takes two arguments and performs some operation
function addNumbers(a, b) {
    return a + b; // This function adds the two numbers together
}
// Step 3: Call the function with the first set of variables and output the result
let result1 = addNumbers(num1, num2);
console.log("Result of adding num1 and num2:", result1);
// Step 4: Create a second call to the function with two more numbers as arguments
let num3 = 15;
let num4 = 20;
let result2 = addNumbers(num3, num4);
console.log("Result of adding num3 and num4:", result2);
