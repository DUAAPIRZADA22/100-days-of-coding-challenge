"use strict";
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterGreaterThan(numbers) {
    return numbers.filter(numbers => numbers > 10);
}
const numbers = [5, 10, 15, 20, 25]; // Example: Filtering an array of numbers
console.log(filterGreaterThan(numbers));
// The new array contains only the numbers that are greater than 10.
