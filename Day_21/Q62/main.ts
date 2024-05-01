// Making a Student Template:

//creating a blueprint (interface) for student information 
interface student {
    name: string,
    age: number,
    course: string
};

//filling in the blueprint with an example student
let student: any = {
    name: "Duaa",
    age: 23,
    course: ["Math" , "Typescript", "Python"]
};
// showing the student's information
console.log(student);
// we are using the blueprint to make sure our student has a name, age, and list of courses.
