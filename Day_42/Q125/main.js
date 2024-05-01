"use strict";
//  Modify a method in an object's to use the this keyword to access another property in the same object.
const rectangular = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    }
};
console.log(rectangular.calculateArea());
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.
