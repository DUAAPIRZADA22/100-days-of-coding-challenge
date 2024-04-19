"use strict";
//  Function with Rest Parameters: 
function logHobbies(...hobbies) {
    hobbies.forEach((hobby) => {
        console.log(`I enjoy ${hobby}.`);
    });
}
;
// call
logHobbies("reading", "coding", "writing");
