"use strict";
// Array Destructuring:
const laptops = [
    { make: 'Dell', model: 'XPS 13', year: 2021 },
    { make: 'Apple', model: 'MacBook Air', year: 2022 },
    { make: 'HP', model: 'Pavilion', year: 2020 }
];
// Using array destructuring to assign the first and second laptops to variables
const [firstLaptop, secondLaptop] = laptops;
// Logging the variables
console.log("First Laptop:", firstLaptop);
console.log("Second Laptop:", secondLaptop);
