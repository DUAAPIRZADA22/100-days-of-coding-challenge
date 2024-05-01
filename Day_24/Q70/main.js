"use strict";
//  Understanding let in Loops:
// this function prints numbers from 1 to 5 using a loop
function printNumberWithLet() {
    for (let i = 0; i <= 5; i++) { //uses 'let' for loop variable 'i'
        console.log(i); //logs numbers 1 through 5
    }
}
// 'i' is not accessible here, outside the loop because it's defined with 'let
printNumberWithLet();
//this shows that 'let' limits 'i' to the loop, preventing errors from using 'i' where it's not intended.
