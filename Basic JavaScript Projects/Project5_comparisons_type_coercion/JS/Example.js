function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; //This display NaN(Not a Number)
}

function r_Function() {
     document.getElementById("rich").innerHTML = isNaN('This is a string'); //This display isNaN(is Not a Number  because 'This is a string' is not a number and the result is True)
}

function richard() {
    document.getElementById("ric").innerHTML = isNaN('234'); //This would result in “false” because 234 is a number.
}