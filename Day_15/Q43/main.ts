// Unchanged Magicians:

let magicians: string[] = ["Alice", "David", "Chris"];
let magicians1 : string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}

function theGreat(magicians1 : string[]) {
    let great_magicians1: string[] = [];
    magicians1.forEach(element => {
        great_magicians1.push(`${element}, the great`);
    });
    return great_magicians1
}
let great_magicians1 = theGreat(magicians1.slice()); //creates a new mmodified array
console.log("Original magicians:");
show_magicians(magicians); //shows original names
//show_magicians is a function which is in "Day14"
console.log("Great Magicians:");
show_magicians(great_magicians1); //shows modified names
  
