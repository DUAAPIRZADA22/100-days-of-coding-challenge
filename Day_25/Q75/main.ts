// Compound Assignment Operators:

// this function uses compound assignment operators for different operators
function useCompoundOperators (){
    let x: number = 4;              // starts with x = 4
    console.log("\nInitial x:", x);
    
    x += 2;   // adds 2 to x (4 + 2 = 6) x = 6 here
    console.log("After Adding:", x);   // shows x after addition

    x -= 1;   // subtracts 1 from x (6 - 1 = 5) x = 5 here
    console.log("After Subtracting:", x); // shows x after subtraction

    x *= 3;   // multiply x by 3 (5 * 3 = 15) x = 15 here
    console.log("After Multipling:", x); // shows x after multiplication

    x /= 2;   // divides x by 2 (15 / 2 = 12) x = 12 here
    console.log("After Dividing:", x);    // shows x after division
}
// calling the function
useCompoundOperators();
//we simplify arithmetic operators on x using compound assignment operators, like a shorcut.
