"use strict";
//  Making Enums for Vehicles:
//makig a lsit (enum) for different types of vehicles 
var vehicleTypes;
(function (vehicleTypes) {
    vehicleTypes[vehicleTypes["car"] = 0] = "car";
    vehicleTypes[vehicleTypes["motorcycle"] = 1] = "motorcycle";
    vehicleTypes[vehicleTypes["truck"] = 2] = "truck";
})(vehicleTypes || (vehicleTypes = {}));
console.log(vehicleTypes.car); ////it shows 0 bcz enums start counting from 0
//here we are just checking what number the car category got in our list.
