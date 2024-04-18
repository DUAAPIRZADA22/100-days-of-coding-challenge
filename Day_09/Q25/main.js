"use strict";
// Alien Colors #1:
// version that passes
let alien_color = "Green";
if (alien_color == "Green") {
    console.log("You just earned 5 points");
}
// version that fails
alien_color = "Red";
if (alien_color = "Red") {
    // no output cuz the condition is false
}
