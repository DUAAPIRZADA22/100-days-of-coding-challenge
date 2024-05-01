"use strict";
// Create a loop that iterates through a string and stops when it finds the first vowel.
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First Vowel Found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("jgflimno"); //  logs j,g,f,l then First Vowel found: i 
