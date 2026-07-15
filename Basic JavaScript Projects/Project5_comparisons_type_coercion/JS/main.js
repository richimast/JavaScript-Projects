document.write(typeof "word"); //TypeOf operator, this operator gives the data type of a variable
document.write("<br>");

document.write(typeof 3);
document.write("<br>");

document.write("12" + 5); // utilizing type coercion.
document.write("<br>");

function ben() {
   { let x = 3E328587; //large enough number to display “Infinity”
    document.getElementById("man").innerHTML = x;
   }
}
 

function my() {
   { let A = -7E658; //large enough negative number to display “-Infinity” 
    document.getElementById("me").innerHTML = A;
   }
}


document.write(15 > 12); //Boolean logic, the greater than operator to display True
document.write("<br>");

document.write(18 < 7); //Boolean logic, the less than operator to display false
document.write("<br>");

console.log(8 + 6); //this display the result in console by using Dev Tool

console.log(9 < 6); //Display “false” in the console using Boolean logic and the console.log() method.

document.write(5 == 5); //Double Equal signs comparison this display true
document.write("<br>");

document.write(15 == 12); //Double Equal signs comparison this display false
document.write("<br>");

X = 21;
Y = 21;
document.write(X === Y); //Triple Equal signs comparison this display true
document.write("<br>");

DateOfBirth1 = 5/10/1980
DateOfBirth2 = 2/10/1980
document.write(DateOfBirth1 === DateOfBirth2); //Triple Equal signs comparison this display false
document.write("<br>");

A = "Richard";
B = "Richard";
document.write(A === B); // Triple Equal signs this reture true because the data type A "string" is same as data type B 
document.write("<br>");

C = 45;
D = "45";
document.write(C === D); //Triple Equal signs this reture false because the data types number and string respectively were not the same
document.write("<br>");

document.write(8 > 6 && 12 > 9); //using Boolean logical operator AND(&&) to display the results of true for these values
document.write("<br>");

document.write(8 > 6 && 9 > 12); //using Boolean logical operator AND(&&) to display the results of false for these values
document.write("<br>");

document.write(7 > 5 || 3 > 2); //using Boolean logical operator OR(||) to display the return of true for these values
document.write("<br>");

document.write(6 > 8 || 14 > 25); //using Boolean logical operator OR(||) to display the return of false for these values

function not_Function() {
   document.getElementById("Not").innerHTML = !(18 > 7); //using Boolean logical operator NOT(!) to display the return of false if this value is true

}

function NOT_Function() {
   document.getElementById("NOt").innerHTML = !(4 > 9); //using Boolean logical operator NOT(!) to display the return of true if this value is false

}