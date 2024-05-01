"use strict";
// Replacing Text in a String:
function replaceText(sentence) {
    return sentence.replace(/Javascript/g, "Typescript");
}
// uses a regular expression with the 'g' flag for a global replacement
console.log(replaceText("I love Javascript and Javascript is awesome."));
