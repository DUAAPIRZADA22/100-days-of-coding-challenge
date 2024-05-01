//  Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a, b) => a + b;
  
  console.log(traditionalFunction(6, 3));  // outputs: 9
  console.log(arrowFunction(6, 3));  // outputs: 9
  // Demonstrates the conversion of a traditional function expression to an arrow function.  