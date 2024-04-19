// Checking Usernames:

let current_users: string[] = ["duaa","hamza", "Sania", "Komal", "Sabeen"]
let new_users: string[] = ["Duaa", "Aiman", "Aliza", "Hamza", "Mehvish"]

new_users.forEach((new_user) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === new_user.toLowerCase()
        )
    ) {
        console.log(`${new_user} will need to enter a new username.`)
    } else {
        console.log(`${new_user} is available.`)
    }
})
