// Default Parameters: 

// this function greets a user by name, or greet an anonymous user if no name is provided
function greetUser(name: string = "Anonymous"){
    console.log(`Hello, ${name}!`)                       // says hello to the given name or to an anonymous user
};

// trying calling thr function with a name and without
greetUser("Duaa");
greetUser();