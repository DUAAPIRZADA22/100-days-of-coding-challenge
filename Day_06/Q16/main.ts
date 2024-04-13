//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.


let Guests:string[] = ["Sania", "Maryam", "Sabeen"]
console.log("Great News! I found a bigger dinner table")

// Adding more guests
Guests.unshift("Aliza")
Guests.splice(Guests.length / 2, 0, "Iqra");
Guests.push("Aiman")

Guests.forEach (Guests => {
    console.log(`Dear ${Guests} would you like me to join for a dinner?`)
});

