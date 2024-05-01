// Create two modules; one that exports a class, and another that imports the class and creates an instance.


// In file: person.ts
export class person {
    name: string;
    constructor (name: string){
        this.name = name;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
// Exports the person class 