"use strict";

var re = /[b-zB-Z]{6,}/;
console.log(/Wonderful,re/.test("Wonderful, re")); 
console.log(/Joyful,re/.test("Joyful, re"));
console.log(/Happiness,re/.test("Happiness, re")); 
console.log(/Time,re/.test("Time, re")); 
console.log(/Task,re/.test("Task, re"));
console.log(/Apple,re/.test("Apple, re"));    