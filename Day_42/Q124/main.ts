// Create a function inside an object that returns the object's own name property using the this keyword.

const person = {
    name: "Duaa",
    getName: function (){
        return this.name    // uses 'this' to refer to the object itself and return its 'name' property
    },
    }

console.log(person.getName()); // outputs: Duaa
// This method correctly identifies and returns the objects 'name' property using 'this'.

