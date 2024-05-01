// Block Scope with let and const: 

console.log("\n");
// demonstraating block scope
{
   let blockLet = "Visibe inside the block";
   const blockConst = "also only inside the block"
   console.log(blockLet)     // works fine here
   console.log(blockConst)   // also works fine here
}

try {
    console.log(blockLet);  //this will fail
} catch (error) {
    console.log("'blockList' is not accessible outside the block.");
}

try {
    console.log(blockConst);  //this will also fail
} catch (error) {
    console.log("'blockConst' is not accessible outside the block.");
}
//TypeScript shows errors in this code because it performs static type checking during compilation.

//this shows that 'let' and 'const' keep variables safe inside the block where they're defined