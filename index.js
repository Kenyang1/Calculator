
const display = document.getElementById("display");

function appendToDisplay(userInput) {
    display.value += userInput;
    
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}
