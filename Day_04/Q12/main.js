"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friendsName = ["Duaa", "Sania", "Komal"];
for (let name of friendsName) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
