// Exercise 6: Array Sum

function totalSum(numbers = []) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

let finalSum = totalSum([10, 20, 30, 40]);
console.log("Exercise 6 Result:", finalSum);
