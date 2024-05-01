"use strict";
// Function Expressions vs. Function Declarations:
// function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
