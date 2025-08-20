"use strict";

var re = /^[b-zB-Z]{6,}$/;

console.log("Wonderful", re.test("Wonderful")); // true
console.log("Joyful", re.test("Joyful"));       // true
console.log("Happiness", re.test("Happiness")); // false
console.log("Time", re.test("Time"));           // false
console.log("Task", re.test("Task"));           // false
console.log("Apple", re.test("Apple"));         // false