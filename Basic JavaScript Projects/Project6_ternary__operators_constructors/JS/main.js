//Utilizing Ternary Operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

//A Constructor function utilizing "New_and_This" keywords
function Vehicle(Make,Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myRichard() {
    document.getElementById("New_and_This").innerHTML = "Erik drive a  " + Erik.Vehicle_Color +  "-colored  " + Erik.Vehicle_Model + " manufactured in  " + Erik.Vehicle_Year;
}

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
function myFamily() {
    // Display age
document.getElementById("Ben").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
}

//Nested Functions
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}