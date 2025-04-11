// Exercise 4: String Repeater

function repeatMessage(message = "Hi", count = 1) {
    let resultString = "";
    for (let i = 0; i < count; i++) {
        resultString += message;
    }
    return resultString;
}

let repeated = repeatMessage("Code ", 4);
console.log("Exercise 4 Result:", repeated);
