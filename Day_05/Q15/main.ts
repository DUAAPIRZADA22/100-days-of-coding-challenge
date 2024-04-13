// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite

//Inviting guestss
let Guests: string[] = ["Sania" , "Komal", "Sabeen"]

for (let eachGuest of Guests) {
    console.log(`Dear ${eachGuest}, would you like to join me for a dinner? `)
}

// Q15 Answer below
let unabletoAttend: string = "Komal"
console.log(`${unabletoAttend} cant make it to dinner`)

// replace new guest
let newGuest: string = "Maryam"
Guests[Guests.indexOf(unabletoAttend)] = newGuest

// new invitation
Guests.forEach(Guests => {
    console.log(`Dear ${Guests}, would you like to join me for dinner?`);
});