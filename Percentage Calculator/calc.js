var textField1 = document.getElementById("textField1");
var textField2 = document.getElementById("textField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("formOperation");

/*textField1.value = "Eat This Shit!";
textField2.value = "Eat This Mother Shit!";
resultField.innerText = "Change is comming!";*/

form.addEventListener("submit", function(event) {
    var x = parseFloat(textField1.value);
    var y = parseFloat(textField2.value);
    
    var result = x / y;
    var error1 = x > y;
    var percentage = result * 100;
    
    if (!textField1.value || !textField2.value) {
        alert("Error! Please enter a value!");
    }
    else if (error1) {
        alert("Error! Kindly Check the value");
    }
    else if (isNaN(textField1.value)){
        alert("Error! Not a number");
    }
    else if (isNaN(textField2.value)) {
        alert("Error! Not a number");
    }
    else {
        resultField.innerText = "Answer: " + percentage + "%";
        event.preventDefault();
    }
      
});
