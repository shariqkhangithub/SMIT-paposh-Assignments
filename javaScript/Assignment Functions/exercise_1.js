// Exercise 1: Simple Addition
// Modified: Added default values and arrow function

const addNumbers = (num1 = 0, num2 = 0) => {
    return num1 + num2;
};

let result1 = addNumbers(3, 7);
console.log("Exercise 1 Result:", result1);