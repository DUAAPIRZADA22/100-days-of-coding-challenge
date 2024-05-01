// Create an arrow function that takes multiple parameters and returns the product of all parameters.


const multipleParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1); // 1 is initial value

console.log(multipleParameters(2,3,4));  // outputs: 24

// Initial value of total: 1
// Iteration 1: total * number = 1 * 2 = 2 (new total)
// Iteration 2: total * number = 2 * 3 = 6 (new total)
// Iteration 3: total * number = 6 * 4 = 24 (final total)

// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together   