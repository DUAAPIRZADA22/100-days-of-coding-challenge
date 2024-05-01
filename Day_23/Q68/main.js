"use strict";
// Multiplying Decimals: 
console.log("\n");
//this function multiplies two decimal numbers
function multiplyDecimals(dNum1, dNum2) {
    return Math.round((dNum1 * dNum2) * 100) / 100;
} // //multiplies the numbers and rounds the result to two decimal places
//trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2));
//after multiplying, we round to make the result easier to read.
