// Replacing Text in a String:

function replaceText (sentence: string): string{
    return sentence.replace(/Javascript/g, "Typescript")
}
// uses a regular expression with the 'g' flag for a global replacement
console.log(replaceText("I love Javascript and Javascript is awesome."));