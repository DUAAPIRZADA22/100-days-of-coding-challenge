// Shrinking Guest List


// initial guests list
let Guests: string[] = ["Sania", "Maryam", "Sabeen", "Aliza", "Iqra" ,"Aiman"]

console.log("Unfortunately, I can only invite two people for dinner.");

while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

Guests.forEach(Guest => {
    console.log(`Dear ${Guest}, you're still invited to dinner.`);
});

Guests.splice(0, Guests.length);
console.log(Guests); // Shows an empty list