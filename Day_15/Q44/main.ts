// Sandwiches:

function makeSandwiches(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(", ")}.`)
}

makeSandwiches("mayo", "cheese")
makeSandwiches("ham", "lettuce", "ketchup")
makeSandwiches("mayo", "ketchup", "cheese")