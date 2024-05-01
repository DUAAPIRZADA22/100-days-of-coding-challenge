"use strict";
// Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
// This simple check helps us greet users appropriately based on the time of day.
