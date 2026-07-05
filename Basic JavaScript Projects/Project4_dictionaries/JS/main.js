//dictionary containing KVPs and its HTML display
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//dictionary containing KVPs and its HTML display
function rich_Dictionary() {
    var student = {
        firstname: "Richard",
        lastname: "Amponsah",
        age: 35,
        course: "JavaScritp",
        height: "6ft",
        color: "Black"
    };
    delete student.height; //using the delete operator to remove the height key value pairs from the dictionary before it is displayed. 
    document.getElementById("ric").innerHTML = "First Name: " + student.firstname + "<br>Last Name: " + student.lastname + "<br>Age: " + student.age + "<br>Course: " + student.course + "<br>Height: " + student.height + "<br>Color: " + student.color;
}