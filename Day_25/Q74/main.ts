// Swapping Variables: 

// this function swaps the values of two variables
function swapVariable (){
    let a : number = 5, b :number = 10  //initially a is 5 and b is 10
    console.log("\nBefore Swaping a = ", a, "b = ", b);

    let temp = a;    // temporarily stores the value of a 
    a = b;           // the value of b assign to a, now the value of b storess in a
    b = temp;        // the value of temp assign to b, in temp the value of a is stored
    console.log("After Swaping a = ", a, "b = ", b);  // logged the swap values
}
// calling the function
swapVariable();
// we use a temporary variables to hold one value while we swap them, like a magic trick!