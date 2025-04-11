// Exercise 3: Maximum of Three Numbers

function largestNumber(num1 = 0, num2 = 0, num3 = 0) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

let maxValue = largestNumber(11, 45, 30);
console.log("Exercise 3 Result:", maxValue);
