//Assigning Global Variable that declared outside of function
var A = 15;
function Add_numbers_1() {
    document.write(28 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 98);
}
Add_numbers_1();
Add_numbers_2();

//Assigning Local variable that declared inside of function
function Add_numbers_3() {
    var B = 15;
    document.write(28 + A + "<br>");
}
function Add_numbers_4() {
    document.write(B + 88);
}
Add_numbers_3();
Add_numbers_4();

//use console.log() method to debug
function Add_numbers_5() {
    var B = 15;
    console.log(13 + B);
}
function Add_numbers_6() {
    console.log(B + 88);
}
Add_numbers_5();
Add_numbers_6();

//A function tha includes an If statements Date().getHours() method 
function get_Date() {
    if (new Date().getHours() < 19) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// A function with If and Else statement
function Richard_Age_function() {
    Age = document.getElementById("Age").Value;
    if (Age >= 18) {
        Drive = "You are an adult to drive!";
    }
    else {
        Drive = "You are a minor to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}

//utilizing the time_function with If, Else If and Else  Statements
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
