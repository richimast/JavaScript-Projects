//Utilizing the concat()method
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}
//Utilizing the slice() Method
function slice_Method() {
    var Sentence = "All work and no play makes Richard a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

//Utilizing the .tostring() Method
function string_Method() {
    var A = 259;
    document.getElementById("Numbers_to_string").innerHTML = A.toString();
}

// Utilizing the toPrecision()method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}