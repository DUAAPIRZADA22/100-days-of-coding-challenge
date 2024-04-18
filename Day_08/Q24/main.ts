// More Conditional Tests:

console.log("Tests for equality and inequality with strings:")
console.log("apple" == "apple") // True
console.log("apple" == "Apple") // False

// Tests using the lower case function
console.log("Testing with Lowercase:")
console.log("Apple".toLowerCase() == "apple") // True

// Numerical tests
console.log("Numerical Tests:")
console.log(10 > 5) // True
console.log(2 < 1) //  False

// Tests using "and" and "or" operators
console.log("Tests Using 'and' and 'or' operators:")
console.log(true && false) // false
console.log(true || false) // true

//Test whether an item is in a array
console.log("Test an item in array: ")
let fruits = ["Mango", "Banana", "Orange"]
console.log("Is 'Mango' in fruits?")
console.log(fruits.includes("Mango")) // True

// Test whether an item is not in a array
console.log("Test an item which is not in array:")
console.log("Is 'Cherry' not in fruits?")
console.log(!fruits.includes("Cherry")) // True