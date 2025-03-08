//   Login System with Username and Password


var userName = "shariq";
var password = 344468;

var namePrompt = prompt("Enter a Username");
var passwordPrompt = Number(prompt("Enter a Password"));

if (namePrompt === userName && passwordPrompt === password) {
    alert("Login Successful")
} else {
    alert("Please Enter a Valid Username or Password")
}