"use strict";
//  Iterating Over Object Properties:
function logObject(obj) {
    for (let property in obj) { // loops through each property in the object
        console.log(`${property} ${obj[property]}`);
    }
}
;
// Using the function with a car object
logObject({ make: "Toyota", model: "Corolla", year: 2021, color: "Red" });
// it shows us each piece of information stored about the car.
