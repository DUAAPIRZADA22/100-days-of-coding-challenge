"use strict";
//  Iterate over a Map of student IDs and names, and log each pair to the console.
const students = new Map();
students.set(1, "Duaa");
students.set(2, "Sania");
students.set(3, "Komal");
// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
