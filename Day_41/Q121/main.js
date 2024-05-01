"use strict";
//  Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue; // skips the rest of the loop for i = 5
    }
    console.log(i); // logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
