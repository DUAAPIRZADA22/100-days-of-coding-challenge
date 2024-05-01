// Compare let and const: 

console.log("\n");
//using 'let' for a variable that can be reassigned
let age = 23;
age = 24;                //works fine because 'let' allows reassignment
console.log(age)         // shows 24

//trying to reassign a 'const'-decalared variable
const name1 = "Duaa";
try {
    name1 = "Komal";        //this line will cause an error 
}
catch (error) {
    console.log("Error: Can't reassign a 'const'-decalred Variable.");  
};

//Output shows error because the catch block is not working as expected because the error thrown by 
//TypeScript during compilation is not a runtime exception that can be caught by a try...catch block. 
//The error 'error TS2588: Cannot assign to 'name1' because it is a constant' is a TypeScript compilation 
//error, not a runtime exception. 

//Compilation errors are detected and reported during the compilation phase, before the JavaScript code 
//is executed.

//this example illustrates that 'const' prevents changing the variable once it's set.
