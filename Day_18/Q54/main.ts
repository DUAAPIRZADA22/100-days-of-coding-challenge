// Making Flexible Object Key :

interface DynamicObject {
    [key: string]: string;
}

function objectDynamicKey(key: string, value: string): DynamicObject {
    let dynamicObject: DynamicObject = {}; // Specify the type of dynamicObject as DynamicObject
    dynamicObject[key] = value;
    return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = objectDynamicKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);
