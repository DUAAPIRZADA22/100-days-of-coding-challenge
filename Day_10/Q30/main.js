"use strict";
// Hello Admin:
let userNames = ["admin", "user1", "user2", "user3", "user4"];
userNames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thankyou for logging in again.`);
    }
});
