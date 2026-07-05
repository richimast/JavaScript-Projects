function addition_Function() { //Defining and naming the addition function
    var add = 3 + 4;
    document.getElementById("Add").innerHTML = "3 + 4 = " + add;  //Print the result in HTML
}

function subtraction_Function() {
    var sub = 10 - 6; //Defining and naming the subtraction function
    document.getElementById("Sub").innerHTML = "10 - 6 = " + sub;  //Print the result in HTML
}

function multiplication() {
    var mult = 7 * 6; //creating the variable multiplication function
    document.getElementById("Mlt").innerHTML = "7 * 6 = " + mult;  //Print the result in HTML

}

function division() {
    var divide = 66 / 3; //creating the variable division function
    document.getElementById("Div").innerHTML = "66 / 3 = " + divide;  //Print the result in HTML

}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5; //creating the variable for multiple operations function
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subracted by 5 equal to " + simple_Math; //Print the result in HTML

}

function modulus_Operator() {
    var modulus = 25 % 6; //Defining and naming the  modulus operator function
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of : " + modulus; //Print the result in HTML
}

function negation_Operator() {
    var x = 10; //creating the variable for negation Operator function
    document.getElementById("nega").innerHTML = -x; //Print the result in HTML

}

function Increment() { //Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Save the text of the HTML element to a variable
    value++; //Add one to the value
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
}

function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable
    value--; //Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML
}

window.alert(Math.random() * 100); //This is used to utilize the Math.random() function between 0 and 100

function random() { //Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in HTML

}