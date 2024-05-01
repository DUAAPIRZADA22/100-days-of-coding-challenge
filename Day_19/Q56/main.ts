// Keep Only Strings: 

// a mixed bag of items
let mixedArray = [1, "grapes", 2, "apple", true,  "banana", 3, false ,"mango"]

//picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");
//this line checks each item: if it's a word, it goes into the new list


//shows the list of just words
console.log(stringsArray);

// picks out only the numbers
let numberArray = mixedArray.filter(item => typeof item === "number");
//this line checks each item: if it's a number, it goes into the new list

//shows the list of just number
console.log(numberArray);

//picks out only the boolean
let booleanArray = mixedArray.filter(item => typeof item  === "boolean");
//this line checks each item: if it's a boolean,  it goes into the new list

//shows the list of just boolean
console.log(booleanArray);
