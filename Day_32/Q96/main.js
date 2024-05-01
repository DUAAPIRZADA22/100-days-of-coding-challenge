"use strict";
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
