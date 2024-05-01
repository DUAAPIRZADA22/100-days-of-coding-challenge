// Add a Special Number: 

//this program makes a function that adds a specific number
function makeAdder(valueToAdd : number): (numbers: number) => number {
    //this is the magic box. It takes a number and add your special number to it
    return function(number : number) : number {
        return number + valueToAdd;
};
}

//making a magic box that adds 5 
let addFive = makeAdder(5)
console.log(addFive(10)) //if we put 10 in the box, it gives us 15 
//we made a function (magic box) that adds 5 to any number