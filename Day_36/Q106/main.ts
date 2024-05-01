//  Determine if a given year is a leap year using comparison operators.

function isLeapYear (year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
console.log(isLeapYear(2020)); // outputs: true
console.log(isLeapYear(1990)) // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
