"use strict";
// Dividing and Finding the Remainder: 
console.log("\n");
//this function divides two numbers and finds the quotient and reminder
//we specifies that the function returns an object with properties quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder }; // Returns both in an object
}
console.log(divideAndRemainder(10, 3));
