"use strict";
//  Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Answer of Q112:
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
// Answer of Q113:
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The Capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
