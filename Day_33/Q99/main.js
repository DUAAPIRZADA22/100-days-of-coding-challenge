"use strict";
// Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) { //if the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(2, 17); // Example: February 17th
console.log("Next Birthday On: ", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
