// Exercise 2: Check Even or Odd
// Modified: Same logic with different variable and function names

function detectParity(value = 0) {
    let type;
    if (value % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }
    return type;
}

let output = detectParity(9);
console.log("Exercise 2 Result:", output);

