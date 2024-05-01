// Function Expressions vs. Function Declarations:

// function declaration for squaring a number
function squareDeclaration(number : number): number{
    return number * number
}
// function expression for squaring a number
const squareExpression = function(number : number): number{
    return number * number
}
console.log(squareDeclaration(4));  
console.log(squareExpression(4));   
// both methods gives us the same result, showing two different ways to create functions that do the same thing.