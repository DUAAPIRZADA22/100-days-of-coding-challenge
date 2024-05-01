"use strict";
// Arithmetic with Mixed Types: 
//this function add a number and a string that represents a number like "5"
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
} ////convert the string to a number and adds it to the first number
//trying it with 4 and "6"
console.log(addNumberAndString(4, "6"));
//output is 10
//the string "6" is turned into the number, and then added to 4.
