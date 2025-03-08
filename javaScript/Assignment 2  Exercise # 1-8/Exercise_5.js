//  Check If a Person is Eligible for a Discount


var age = prompt("Enter your Age");
var membership = prompt("you have a membership car  'yes or no'");

if (age >= 60 || membership == "yes") {
    alert(" You are eligible for a discount.")
} else {
    alert("You are not eligible for a discount")
}