"use strict";
// Block Scope with let and const: 
console.log("\n");
// demonstraating block scope
{
    let blockLet = "Visibe inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // works fine here
    console.log(blockConst); // also works fine here
}
