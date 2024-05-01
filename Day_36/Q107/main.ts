//  Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function isDivisibleByTwoAndThree (number: number): boolean{
    return number % 2 === 0 && number % 3 === 0                // Uses the modulo operator to check for no remainder  
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
// Logical operators help us verify the number's divisibility by both 2 and 3.