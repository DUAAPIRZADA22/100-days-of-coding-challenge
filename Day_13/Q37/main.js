"use strict";
// Large shirt:
function make_shirt(size, message = "I Love Typescript") {
    console.log(`Making a ${size} size shirt with the "${message}" printed on it.`);
}
;
make_shirt("large");
make_shirt("medium");
make_shirt("small", "Dive into coding.");
