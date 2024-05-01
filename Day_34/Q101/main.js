"use strict";
// Generate a random integer between 1 and 10.
function getRandomInteger() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInteger());
// Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.
