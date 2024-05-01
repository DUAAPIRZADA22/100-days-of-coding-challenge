"use strict";
// Logical AND Verification: 
// This function sees if both inputs are true
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
//only says true if both values are true
//trying it with both true's.
console.log(checkBothTrue(true, true)); // output true
//trying it with true and false
console.log(checkBothTrue(true, false)); // output false
