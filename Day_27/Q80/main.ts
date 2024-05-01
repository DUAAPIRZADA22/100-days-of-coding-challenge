// Updating Object Properties:

import { RedirectHandler } from "undici-types";

let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2024
} as { make: string; model: string; year: number; color?: string };  // type assertion

// updating year and adding car color
car1.year = 2021
car1.color = "Blue"

// showing the updated car object 
console.log(car1)

// outputs the car object with the new color and updated year
// now our car is blue and its model year is updated to 2021.