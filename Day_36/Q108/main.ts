// Compare two strings to check if they are identical, ignoring case sensitivity.

function isStringEqualIgnoreCase (str1: string, str2: string): boolean{
    return str1.toLowerCase() === str2.toLowerCase()
}
console.log(isStringEqualIgnoreCase("hello", "Hello"))
console.log(isStringEqualIgnoreCase("world" , "Word"))
// We make both strings lowercase to ensure the comparison ignores case differences.