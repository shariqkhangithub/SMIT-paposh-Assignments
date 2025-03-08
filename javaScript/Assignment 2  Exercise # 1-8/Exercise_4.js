//   Find the Largest of Two Numbers



var num1 = Number(prompt("First Number"));
var num2 = Number(prompt("Second Number"));


if (num1 > num2) {
    alert(num1 + ' is greater' )
} 
else if(num2 > num1) {
    alert(num2 + ' is greater')
}
else if(num1 === num2){
    alert('Both Are Equal')
}
else{
    alert('Please Enter a Number')
}
