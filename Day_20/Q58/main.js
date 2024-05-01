"use strict";
// Write a simple program that can take lots of scores and find their average.
//this program calculates the average of all scores given
function averageScore(...scores) {
    //adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//we add up all the scores, then divide by how many there are
//Example: finding the average of four score
console.log(averageScore(50, 60, 70, 80));
