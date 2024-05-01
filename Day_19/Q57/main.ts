// Find the Average Grade: 

//a list of grades
let grades : number[] = [77, 92, 88, 53, 99, 63];

//calculates the average grade 
let averageGrade = grades.reduce((total, grade) =>
total + grade, 0) / grades.length;
//first, we add up all the grades. Then, we divide by how many grades there are to get the average.

//shows the average grade
console.log(averageGrade);