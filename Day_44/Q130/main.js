"use strict";
//  Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
const mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.
