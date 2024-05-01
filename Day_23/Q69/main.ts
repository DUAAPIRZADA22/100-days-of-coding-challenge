// Dividing and Finding the Remainder: 

console.log("\n");
//this function divides two numbers and finds the quotient and reminder
//we specifies that the function returns an object with properties quotient and remainder
function divideAndRemainder (dividend: number, divisor: number):{quotient: number ;remainder: number}{
// Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor
    return { quotient, remainder };      // Returns both in an object
}

console.log(divideAndRemainder(10, 3))
// output {quotient : 3, remainder: 1}
// it shows how many times 3 goes into 10, and what's left ovver.