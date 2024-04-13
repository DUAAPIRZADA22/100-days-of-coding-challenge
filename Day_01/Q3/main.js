"use strict";
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personsName = "Duaa Pirzada";
// lowercase
console.log("lowercase:", personsName.toLowerCase());
// Uppercase
console.log("Uppercase:", personsName.toUpperCase());
// Titlecase
console.log("Titilecase:", personsName.replace(/\bw/g, c => c.toUpperCase()));
