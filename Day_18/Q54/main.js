"use strict";
// Making Flexible Object Key :
function objectDynamicKey(key, value) {
    let dynamicObject = {}; // Specify the type of dynamicObject as DynamicObject
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = objectDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
